import React, {useEffect, useState, memo} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {Cart} from '../../models/home/cartProps';
import {height, width} from '../../utils/contants';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import {Colors} from '../../thema/Colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/route';
import CustomButton from '../ui/CustomButton';
import {useDispatch} from 'react-redux';
import {deleteItemCart} from '../../store/slices/CartsSlice';

const CartItem: React.FC<Cart> = ({item, onChangePrice}) => {
  const [product, setProduct] = useState<object>({});
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const productUrl: string = `${PRODUCTS_URL}/${item.productId}`;
    getRequest(productUrl).then(data => {
      setProduct(data.data);
      onChangePrice(data.data.price);
    });
  }, []);

  const handleRemoveItem = () => {
    dispatch(deleteItemCart({productId: item.productId, price: product.price}));
    onChangePrice(-product.price); // Fiyatı çıkar
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: product})}>
      <View style={{padding: 5}}>
        {product?.image && (
          <Image style={styles.image} source={{uri: product?.image}} />
        )}
      </View>
      <View style={{flex: 1, padding: 8}}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.count} numberOfLines={1}>
          Count:{product?.description}
        </Text>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          <Text style={styles.price}>${product?.price}</Text>
        </View>
        <CustomButton
          title="Remove"
          buttonType="full"
          onPress={handleRemoveItem}
        />
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
    fontWeight: '500',
  },
  count: {
    fontSize: 16,
    color: Colors.GRAYTEXT,
    marginTop: 8,
  },
  price: {
    marginBottom: 6,
    color: Colors.ORANGE,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default memo(CartItem);
