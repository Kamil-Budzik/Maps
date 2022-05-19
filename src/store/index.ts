import { configureStore } from '@reduxjs/toolkit';

import locationReducer from 'features/location/locationSlice';
import summaryReducer from 'features/summary/summarySlice';
import historyReducer from 'features/history/historySlice';
import errorReducer from 'features/error/errorSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    summary: summaryReducer,
    history: historyReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
