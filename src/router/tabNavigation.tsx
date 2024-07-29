import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {CART, FAVORITES, HOMESCREEN, PROFILE, TRENDYOLGO} from '../utils/route';
import TabIcon from '../components/router/tabIcon';
import {Colors} from '../thema/Colors';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const TabNavigation: React.FC = () => {
  const quantity = useSelector(state => state?.cart?.cart).length;
  const favoritesCount = useSelector(
    state => state?.favorites?.favorites.length,
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 50,
          padding: 5,
          paddingBottom: 10,
        },
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route.name}
          />
        ),
        tabBarActiveTintColor: Colors.ORANGE,
        tabBarInactiveTintColor: Colors.GRAYTEXT,
      })}>
      <Tab.Screen name={HOMESCREEN} component={Home} />
      <Tab.Screen
        name={TRENDYOLGO}
        component={TrendyolGo}
        options={{
          tabBarBadge: 'New',

          tabBarBadgeStyle: {
            fontSize: 6,
            marginTop: -5,
            marginLeft: 8,
            backgroundColor: Colors.RED,
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name={FAVORITES}
        component={Favorites}
        options={{
          tabBarBadge: favoritesCount > 0 ? favoritesCount : null,
          tabBarBadgeStyle: {
            fontSize: 10,
            top: -4,
            marginLeft: 4,
            backgroundColor: Colors.ORANGE,
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name={CART}
        component={Cart}
        options={{
          tabBarBadge: quantity > 0 ? quantity : null,
          tabBarBadgeStyle:
            quantity > 0
              ? {
                  fontSize: 10,
                  top: -4,
                  marginLeft: 4,
                  backgroundColor: Colors.ORANGE,
                  color: 'white',
                }
              : null,
        }}
      />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
