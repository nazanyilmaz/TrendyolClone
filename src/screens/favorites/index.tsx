//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCarts} from '../../store/actions/CartsActions';
import {Colors} from '../../thema/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoritesItem from '../../components/favorites/favoritesItem';
import ListEmptyComponent from '../../components/ui/ListEmptyComponent';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/route';

const Favorites: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state?.favorites);
  const {selectedCategory} = useSelector(state => state?.categories);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getCarts({userId: '2'}));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <ListEmptyComponent
            onPress={() =>
              navigation.navigate(PRODUCTLIST, {category: selectedCategory})
            }
            btnTitle="Let's Start Shopping"
            icon={<Ionicons size={50} color={Colors.ORANGE} name={'heart'} />}
            title="Add a first favorite item!"
            description="Add the product you like to the favorite list"
          />
        }
        data={favorites}
        renderItem={({item}) => (
          <FavoritesItem
            item={item}
            price={item.price}
            description={item.description}
            title={item.title}
            image={item.image}
          />
        )}
      />
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
export default Favorites;
