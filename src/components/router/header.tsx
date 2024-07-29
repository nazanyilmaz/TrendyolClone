import React from 'react';
import {View, StyleSheet, SafeAreaView, Pressable, Text} from 'react-native';
import {HeaderProps} from '../../models/router';
import {height} from '../../utils/contants';
import CustomInput from '../ui/CustomInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../../thema/Colors';
import {useNavigation} from '@react-navigation/native';
import {NOTIFICATION} from '../../utils/route';
import {countNotificationRead} from '../../utils/functions';
import {useSelector} from 'react-redux';

const Header: React.FC = () => {
  const {notifications} = useSelector(state => state?.notifications);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput placeholder="Search products or brand" />
      <View style={styles.icon}>
        <Pressable>
          <FontAwesome size={23} color={Colors.BLACK} name="envelope-o" />
        </Pressable>
        <Pressable
          style={styles.bell}
          onPress={() => navigation.navigate(NOTIFICATION)}>
          <Fontisto size={23} color={Colors.BLACK} name="bell" />
          {countNotificationRead(notifications) > 0 && (
            <View
              style={{
                position: 'absolute',
                top: -7,
                right: -8,
                backgroundColor: Colors.ORANGE,
                width: 18,
                height: 18,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 99,
              }}>
              <Text style={{color: Colors.WHITE, fontSize: 12}}>
                {countNotificationRead(notifications)}
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.1,
    marginHorizontal: 5,
    gap: 1,
  },
  icon: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  bell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Header;
