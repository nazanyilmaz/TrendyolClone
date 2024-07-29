import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
import {height, width} from '../../utils/contants';
import {Colors} from '../../thema/Colors';
import CustomButton from '../../components/ui/CustomButton';
import {useDispatch} from 'react-redux';
import {updateCarts} from '../../store/actions/CartsActions';
import {useNavigation} from '@react-navigation/native';
import {HOMESCREEN} from '../../utils/route';

const ProductDetail: React.FC = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView>
          {item?.image && (
            <Image source={{uri: item?.image}} style={styles.image} />
          )}
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </ScrollView>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          height: height * 0.08,
          paddingTop: 10,
          borderTopWidth: 0.5,
          borderColor: Colors.GRAYINPUT,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '800', color: Colors.ORANGE}}>
            $ {item?.price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: Colors.GREEN,
              marginVertical: 5,
            }}>
            Free delivery
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <CustomButton title={'Buy Now'} />
          <CustomButton
            title={'Add to Cart'}
            buttonType="full"
            onPress={() => {
              dispatch(
                updateCarts(
                  {
                    userId: 2,
                    date: 2019 - 12 - 10,
                    products: [{productId: item?.id, quantity: 1}],
                  },
                  '2',
                ),
              ),
                navigation.navigate(HOMESCREEN);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  title: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '700',
    color: Colors.BLACK,
    margin: 10,
  },
  description: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.GRAYTEXT,
    margin: 5,
  },
});

export default ProductDetail;
