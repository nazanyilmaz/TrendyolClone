//import liraries
import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCarts} from '../../store/actions/CartsActions';
import {Colors} from '../../thema/Colors';
import CustomButton from '../../components/ui/CustomButton';
import {height} from '../../utils/contants';
import CartItem from '../../components/cart/CartItem';
import Spinner from '../../components/ui/Spinner';
import {setTotalPrice} from '../../store/slices/CartsSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const {cart, pending, totalPrice} = useSelector(state => state?.cart);
  // const [itemPrice, setPrice] = useState<number>(0);
  // const [total, setTotal] = useState<number>(0);

  // const calculateTotalPrice = price => {
  //   setTotal(total + price);
  //   return total;
  // };
  // const totalPrice = useMemo(
  //   () => calculateTotalPrice(itemPrice),
  //   [itemPrice, cart],
  // );
  useEffect(() => {
    dispatch(getCarts({userId: '2'}));
  }, [dispatch]);
  //console.log(totalPrice);

  const handlePriceChange = priceChange => {
    dispatch(setTotalPrice(priceChange));
  };

  return (
    <View style={styles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={cart}
          renderItem={({item}) => (
            <CartItem item={item} onChangePrice={handlePriceChange} />
          )}
        />
      )}

      <View
        style={{
          marginBottom: 8,
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: Colors.BLACK,
              marginVertical: 5,
            }}>
            Total
          </Text>
          <Text style={{fontSize: 18, fontWeight: '800', color: Colors.BLACK}}>
            $ {totalPrice}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <CustomButton title={'Checkout'} buttonType="full" />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

//make this component available to the app
export default Cart;
