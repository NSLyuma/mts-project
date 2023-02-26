import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReportsStoreState } from '../../data/types';
import * as reportsApi from './reportsApi';

const initialState: ReportsStoreState = {
  lines: [],
  table: [],
  characteristics: [],
  error: undefined,
};

export const getLines = createAsyncThunk('reports/lines', async () => {
  const data = await reportsApi.requestLines();
  return data;
});

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLines.fulfilled, (state, action) => {
        state.lines = action.payload;
      })
      .addCase(getLines.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default reportsSlice.reducer;
