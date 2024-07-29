import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NotificationTypes} from '../../models/home/notification';
import {getNotifications} from '../actions/NotificationActions';

const initialState: NotificationTypes = {
  notifications: [],
  pending: false,
  error: {},
};

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotificationLocal: (state, action) => {
      const notificationExist = state.notifications.some(
        n => n.id === action.payload.id,
      );
      console.log(notificationExist);
      if (!notificationExist)
        state.notifications = [...state.notifications, action.payload];
    },
  },
  extraReducers: builder => {
    builder.addCase(getNotifications.pending, state => {
      state.pending = true;
    });
    builder.addCase(
      getNotifications.fulfilled,
      (state, action: PayloadAction<T>) => {
        state.notifications = action.payload;
        state.pending = false;
      },
    );
    builder.addCase(
      getNotifications.rejected,
      (state, action: PayloadAction<T>) => {
        state.error = action.payload.console.error();
      },
    );
  },
});

export const {addNotificationLocal} = NotificationSlice.actions;
export default NotificationSlice.reducer;
