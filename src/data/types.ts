export type User = {
  firstName: string;
  secondName: string;
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
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}

export type Order = 'asc' | 'desc';
