import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import coursesReducer from './reducers/coursesReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    courses: coursesReducer,
  },
});

export default store;

export type Rootstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
