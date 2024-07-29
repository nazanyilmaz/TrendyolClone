import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import ListEmptyComponent from '../../components/ui/ListEmptyComponent';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../../thema/Colors';
import {PRODUCTLIST} from '../../utils/route';
import {useDispatch, useSelector} from 'react-redux';
import NotificationItem from '../../components/notification/NotificationItem';
import Spinner from '../../components/ui/Spinner';

const Notification: React.FC = () => {
  const navigation = useNavigation();
  const {selectedCategory} = useSelector(state => state?.categories);
  const {notifications, pending} = useSelector(state => state?.notifications);

  return (
    <SafeAreaView style={styles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          ListEmptyComponent={
            <ListEmptyComponent
              onPress={() =>
                navigation.navigate(PRODUCTLIST, {category: selectedCategory})
              }
              btnTitle="Let's Start Shopping"
              icon={<Fontisto size={50} color={Colors.ORANGE} name={'bell'} />}
              title="You do not have any notification!"
              description="Updates from your TRENDYOL community willl be show here!!!! "
            />
          }
          data={notifications}
          renderItem={({item}) => <NotificationItem item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Notification;
