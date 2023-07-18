import { configureStore } from '@reduxjs/toolkit';

import someReducer from './reducers/someReducer';

const store = configureStore({
  reducer: {
    someState: someReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
