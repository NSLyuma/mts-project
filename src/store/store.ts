import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reportsSlice from '../components/Reports/reportsSlice';

const store = configureStore({
  reducer: {
    reports: reportsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
