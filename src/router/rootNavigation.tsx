import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Header from '../components/router/header';
import {
  LOGIN,
  NOTIFICATION,
  PRODUCTDETAIL,
  PRODUCTLIST,
  TABMENU,
} from '../utils/route';
import ProductList from '../screens/products/ProductList';
import ProductDetail from '../screens/products/ProductDetail';
import Login from '../screens/auth/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {userLoginCheck} from '../store/slices/AuthSlice';
import Notification from '../screens/notification';
import messaging from '@react-native-firebase/messaging';
import {
  addNotificationRemote,
  getNotifications,
} from '../store/actions/NotificationActions';
import {Colors} from '../thema/Colors';
import {addNotificationLocal} from '../store/slices/NotificationSlice';

const Stack = createNativeStackNavigator();
const RootNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log('token', value);
      if (value !== null) {
        // value previously stored
        dispatch(userLoginCheck(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      dispatch(
        addNotificationRemote({
          show: JSON.parse(remoteMessage?.data?.show),
          url: remoteMessage?.data?.url,
          productId: remoteMessage?.data?.productId,
          title: remoteMessage?.notification?.title,
          description: remoteMessage?.notification?.body,
          date: remoteMessage?.notification?.date,
        }),
      );

      //dispatch(getNotifications());

      dispatch(
        addNotificationLocal({
          show: JSON.parse(remoteMessage?.data?.show),
          url: remoteMessage?.data?.url,
          productId: remoteMessage?.data?.productId,
          title: remoteMessage?.notification?.title,
          description: remoteMessage?.notification?.body,
        }),
      );
    });

    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        name={TABMENU}
        component={TabNavigation}
      />
      <Stack.Screen
        name={PRODUCTLIST}
        component={ProductList}
        options={{headerTintColor: Colors.ORANGE}}
      />
      <Stack.Screen
        name={PRODUCTDETAIL}
        component={ProductDetail}
        options={{headerTintColor: Colors.ORANGE}}
      />
      <Stack.Screen
        name={NOTIFICATION}
        component={Notification}
        options={{headerTintColor: Colors.ORANGE}}
      />
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
