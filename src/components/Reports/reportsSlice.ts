import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReportsStoreState } from '../../data/types';
import * as reportsApi from './reportsApi';

const initialState: ReportsStoreState = {
  lines: [],
  table: [],
  characteristics: [],
  isOpenCharts: false,
  station: '',
  error: undefined,
};

export const getLines = createAsyncThunk('reports/lines', async () => {
  const data = await reportsApi.requestLines();
  return data;
});

export const getCharacteristics = createAsyncThunk(
  'reports/characteristics',
  async () => {
    const data = await reportsApi.requestCharacteristics();
    return data;
  },
);

export const getTable = createAsyncThunk('reports/table', async () => {
  const data = await reportsApi.requestTable();
  return data;
});

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    openChart: (state, action) => {
      state.isOpenCharts = action.payload.isOpenCharts;
      state.station = action.payload.station;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLines.fulfilled, (state, action) => {
        state.lines = action.payload;
      })
      .addCase(getLines.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getCharacteristics.fulfilled, (state, action) => {
        state.characteristics = action.payload;
      })
      .addCase(getCharacteristics.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getTable.fulfilled, (state, action) => {
        state.table = action.payload;
      })
      .addCase(getTable.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { openChart } = reportsSlice.actions;

export default reportsSlice.reducer;
