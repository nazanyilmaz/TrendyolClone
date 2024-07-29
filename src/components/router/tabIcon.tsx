//import liraries
import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HOMESCREEN} from '../../utils/route';
import {TabIconProps} from '../../models/router';

const TabIcon: React.FC<TabIconProps> = ({focused, size, color, name}) => {
  if (name === HOMESCREEN) {
    return <Entypo size={size} color={color} name={'home'} />;
  } else if (name === 'Favorites') {
    return <Ionicons size={23} color={color} name={'heart'} />;
  } else if (name === 'Cart') {
    return <Ionicons size={size} color={color} name={'cart'} />;
  } else if (name === 'Profile') {
    return <Ionicons size={size} color={color} name={'person'} />;
  } else if (name === 'TrendyolGo') {
    return (
      <MaterialCommunityIcons size={30} color={color} name={'language-go'} />
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default TabIcon;
