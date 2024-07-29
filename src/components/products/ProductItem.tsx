import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import ProductItemProps from '../../models/components/ProductItemProps';
import {height, width} from '../../utils/contants';
import {Colors} from '../../thema/Colors';
import {convertPrice} from '../../utils/functions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/route';
import {useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../../store/slices/FavoriteSlice';
import {setFavorite, unSetFavorite} from '../../store/slices/ProductsSlice';
import FastImage from 'react-native-fast-image';

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  price,
  image,
  item,
}) => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}>
      {item?.image && (
        <FastImage
          defaultSource={require('../../assets/images/login.png')}
          style={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.web,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}
      <Text style={styles.title} numberOfLines={1}>
        {' '}
        {title}{' '}
      </Text>
      <Text style={styles.description} numberOfLines={4}>
        {' '}
        {description}{' '}
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.price}>{convertPrice(price)}</Text>
      </View>
      <Pressable
        style={styles.favoriteButton}
        onPress={() => {
          !item.favorite
            ? dispatch(addFavorite(item))
            : dispatch(removeFavorite(item));
          item.favorite
            ? dispatch(unSetFavorite(item))
            : dispatch(setFavorite(item));
          //dispatch(setFavorite(item));
        }}>
        <Ionicons
          size={22}
          color={Colors.ORANGE}
          name={item.favorite ? 'heart' : 'heart-outline'}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: width * 0.45,
    borderWidth: 0.5,
    borderColor: Colors.GRAYINPUT,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: Colors.WHITE,
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
    marginHorizontal: 13,
    width: width * 0.3,
    height: height * 0.13,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.BLACK,
    margin: 10,
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.GRAYTEXT,
    margin: 5,
  },
  price: {
    color: Colors.ORANGE,
    fontWeight: '500',
    margin: 3,
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    right: 2,
    zIndex: 1000,
  },
});

export default ProductItem;
