import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/actions/ProductsActions';
import ProductItem from '../../components/products/ProductItem';
import Spinner from '../../components/ui/Spinner';

const ProductList: React.FC = ({route}) => {
  const {category} = route.params;
  const {products, pending} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({category: category}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => (
            <ProductItem
              item={item}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProductList;
