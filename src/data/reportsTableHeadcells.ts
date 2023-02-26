import { HeadCell } from './types';

export const headCells: readonly HeadCell[] = [
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Дата',
  },
  {
    id: 'cellId',
    numeric: true,
    disablePadding: false,
    label: 'CellId',
  },
  {
    id: 'rat',
    numeric: true,
    disablePadding: false,
    label: 'RAT',
  },
  {
    id: 'bandMTS',
    numeric: true,
    disablePadding: false,
    label: 'Band МТС',
  },
  {
    id: 'bandMF',
    numeric: true,
    disablePadding: false,
    label: 'Band МФ',
  },
  {
    id: 'coveringMTS',
    numeric: true,
    disablePadding: false,
    label: 'Покрытие МТС',
  },
  {
    id: 'coveringMF',
    numeric: true,
    disablePadding: false,
    label: 'Покрытие МФ',
  },
  {
    id: 'qualityMTS',
    numeric: true,
    disablePadding: false,
    label: 'Качество МТС',
  },
  {
    id: 'qualityMF',
    numeric: true,
    disablePadding: false,
    label: 'Качество МФ',
  },
  {
    id: 'speedMTS',
    numeric: true,
    disablePadding: false,
    label: 'Скорость МТС',
  },
  {
    id: 'speedMF',
    numeric: true,
    disablePadding: false,
    label: 'Скорость МФ',
  },
];
