import React from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {height, width} from '../../utils/contants';
import {Colors} from '../../thema/Colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/route';
import ProductItemProps from '../../models/components/ProductItemProps';
import CustomButton from '../ui/CustomButton';
import {useDispatch} from 'react-redux';
import {updateCarts} from '../../store/actions/CartsActions';
import {removeFavorite} from '../../store/slices/FavoriteSlice';
import {unSetFavorite} from '../../store/slices/ProductsSlice';

const FavoritesItem: React.FC<ProductItemProps> = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}>
      <View style={{padding: 5}}>
        <Image style={styles.image} source={{uri: item?.image}} />
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            marginTop: 10,
          }}>
          <Text style={styles.price}>${item?.price}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <CustomButton
            title="Add Cart"
            onPress={() =>
              dispatch(
                updateCarts(
                  {
                    userId: 2,
                    date: 2019 - 12 - 10,
                    products: [{productId: item.id, quantity: 1}],
                  },
                  '2',
                ),
              )
            }
          />
          <CustomButton
            title="Remove"
            buttonType="full"
            onPress={() => {
              dispatch(removeFavorite(item)), dispatch(unSetFavorite(item));
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  count: {
    fontSize: 16,
    color: Colors.GRAYTEXT,
    marginTop: 8,
  },
  price: {
    color: Colors.ORANGE,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 3,
  },
});

export default FavoritesItem;
