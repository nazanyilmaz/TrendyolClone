import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const getNotifications = createAsyncThunk(
  'notification/getNotifications',
  async () => {
    let notifications = [];
    await firestore()
      .collection('notification')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          notifications.push({
            id: documentSnapshot.id,
            description: documentSnapshot.data().description,
            productId: documentSnapshot.data().productId,
            title: documentSnapshot.data().title,
            url: documentSnapshot.data().url,
            date: documentSnapshot.data().date,
            show: documentSnapshot.data().show,
          });
        });
      });
    return notifications;
  },
);

const updateNotifications = createAsyncThunk(
  'notification/updateNotifications',
  async (id: string) => {
    firestore().collection('notification').doc(id).update({
      show: true,
    });
  },
);
const addNotificationRemote = createAsyncThunk(
  'notification/addNotification',
  async (params: object) => {
    firestore().collection('notification').add(params);
  },
);

export {getNotifications, updateNotifications, addNotificationRemote};
