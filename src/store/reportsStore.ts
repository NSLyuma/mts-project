// небольшое хранилище для данных станций
import { createContext } from 'react';

export type StationData = {
  isOpenCharts: boolean;
  name: string;
};

type ReportsValues = {
  station: StationData;
};

type ReportsAction = {
  type: 'SET_OPEN_CHARTS';
  payload: StationData;
};

type ReportsState = {
  state: ReportsValues;
  dispatch: React.Dispatch<ReportsAction>;
};

export const initialReportsState: ReportsValues = {
  station: { isOpenCharts: false, name: '' },
};

export const initialReportsContext = {
  state: initialReportsState,
  dispatch: (): void => {},
};

export const ReportsContext = createContext<ReportsState>(
  initialReportsContext,
);

export const reportsReducer = (
  state: ReportsValues,
  action: ReportsAction,
): ReportsValues => {
  switch (action.type) {
    case 'SET_OPEN_CHARTS':
      return { ...state, station: action.payload };
    default:
      return state;
  }
};
