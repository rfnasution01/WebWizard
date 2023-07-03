import { configureStore } from '@reduxjs/toolkit';
import { navigationReducer } from '.';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export default store;
