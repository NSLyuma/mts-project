import { createSlice } from '@reduxjs/toolkit';
import { Line, TableData } from '../../data/types';

export type ReportsStoreState = {
  lines: Line[];
  table: TableData[];
  error: string | undefined;
};

const initialState = {
  lines: [],
  table: [],
  error: undefined,
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
});

export default reportsSlice.reducer;
