import React, {useEffect, memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Colors} from '../../thema/Colors';
import Categories from '../../widgets/Categories';
import BestSeller from '../../widgets/BestSeller';
import widgets from '../../widgets/widgets.json';
import Introduction from '../../widgets/Introduction';
import NewArrival from '../../widgets/NewArrival';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBestSellersProducts,
  getNewArrivalProducts,
  getProducts,
} from '../../store/actions/ProductsActions';
import {getCategories} from '../../store/actions/CategoriesActions';
import ForYouProducts from '../../widgets/forYouProducts';
import {getCarts} from '../../store/actions/CartsActions';
import {getNotifications} from '../../store/actions/NotificationActions';

import messaging from '@react-native-firebase/messaging';

const Home: React.FC = () => {
  const {selectedCategory} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  async function requestUserPermission() {
    const token = await messaging().getToken();
    console.log(token);
    if (Platform.OS == 'android')
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    else {
      const authStatus = await messaging().requestPermission();

      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }
  }

  useEffect(() => {
    requestUserPermission();
    dispatch(getNewArrivalProducts({limit: 6}));
    dispatch(getBestSellersProducts({limit: 6}));
    dispatch(getCategories());
    dispatch(getCarts({userId: '2'}));
    dispatch(getNotifications());
  }, []);
  useEffect(() => {
    dispatch(getProducts({limit: 6, sort: 'asc', category: selectedCategory}));
  }, [selectedCategory]);

  const widgetItems: any = ({item}) => {
    switch (item.component) {
      case 'categories':
        return <Categories item={item} />;
      case 'introduction':
        return <Introduction item={item} />;
      case 'forYouProducts':
        return <ForYouProducts item={item} />;
      case 'newArrival':
        return <NewArrival item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      default:
        <Text>Cann't find products</Text>;
        break;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList data={widgets} renderItem={widgetItems} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginTop: 1,
  },
});

//make this component available to the app
export default memo(Home);
