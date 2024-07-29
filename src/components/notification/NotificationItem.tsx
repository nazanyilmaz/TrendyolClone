import React from 'react';
import {Text, StyleSheet, View, Pressable, Alert} from 'react-native';
import {Colors} from '../../thema/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  getNotifications,
  updateNotifications,
} from '../../store/actions/NotificationActions';

const NotificationItem: React.FC = ({item}) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(updateNotifications(item.id)), dispatch(getNotifications());
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Fontisto
          size={30}
          color={item.show ? Colors.GRAYTEXT : Colors.ORANGE}
          name={'bell'}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: Colors.BLACK,
            marginVertical: 5,
          }}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
        <Text> Estimated Date: {item.date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.GRAYINPUT,
    flexDirection: 'row',
    gap: 30,
  },
});

export default NotificationItem;
