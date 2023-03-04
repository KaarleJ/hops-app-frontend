import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import coursesReducer from './reducers/coursesReducer';
import notificationReducer from './reducers/notificationReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
    notification: notificationReducer
  },
});

export default store;

export type Rootstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
