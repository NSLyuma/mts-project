import React from 'react';
import { useSelector } from 'react-redux';
import { ReportsStoreState, Station } from '../../../data/types';
import { RootState, useAppDispatch } from '../../../store/store';
import { openChart } from '../reportsSlice';
import styles from './ReportsStation.module.css';

type Props = {
  station: Station;
};

function ReportsStation({ station }: Props): JSX.Element {
  const state: ReportsStoreState = useSelector(
    (state: RootState) => state.reports,
  );

  const dispatch = useAppDispatch();

  return (
    <button
      className={`${styles.item} ${
        state.station === station.name && styles.item_active
      }`}
      onClick={(): void => {
        dispatch(openChart({ isOpenCharts: true, station: station.name }));
      }}
    >
      <span className={styles.title}>{station.name}</span>

      {!!station.problemsCount && (
        <span className={styles.problems}>
          Проблем:{' '}
          <span className={styles.problems_count}>{station.problemsCount}</span>
        </span>
      )}
    </button>
  );
}

export default ReportsStation;
