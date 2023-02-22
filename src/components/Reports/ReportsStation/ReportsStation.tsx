import React from 'react';
import { Station } from '../../../data/lines';
import styles from './ReportsStation.module.css';

type Props = {
  station: Station;
};

function ReportsStation({ station }: Props): JSX.Element {
  return (
    <button className={styles.item}>
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
