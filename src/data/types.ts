export type User = {
  firstName: string;
  secondName: string;
};

export type Station = {
  name: string;
  problemsCount: number;
};

export type Line = {
  line: string;
  stations: Station[];
};

export type Problem = {
  date: Date;
  problems: number;
};

export type Option = {
  name: string;
  values: number[];
};

export type Property = {
  provider: string;
  options: Option[];
};

export type Characteristic = {
  name: string;
  properties: Property[];
};

export type TableData = {
  id: number;
  date: string;
  cellId: string;
  rat: string;
  bandMTS: number;
  bandMF: number;
  coveringMTS: number;
  coveringMF: number;
  qualityMTS: number;
  qualityMF: number;
  speedMTS: number;
  speedMF: number;
};

export interface HeadCell {
  id: keyof TableData;
  label: string;
}

export type Order = 'asc' | 'desc';

export type ReportsStoreState = {
  lines: Line[];
  table: TableData[];
  characteristics: Characteristic[];
  isOpenCharts: boolean;
  station: string;
  error: string | undefined;
};
