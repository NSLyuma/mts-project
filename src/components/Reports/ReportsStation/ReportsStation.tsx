import React, { useContext } from 'react';
import { Station } from '../../../data/lines';
import { ReportsContext } from '../../../helpers/reportsStore';
import styles from './ReportsStation.module.css';

type Props = {
  station: Station;
};

function ReportsStation({ station }: Props): JSX.Element {
  const { state, dispatch } = useContext(ReportsContext);

  return (
    <button
      className={`${styles.item} ${
        state.station.name === station.name && styles.item_active
      }`}
      onClick={(): void =>
        dispatch({
          type: 'SET_OPEN_CHARTS',
          payload: { isOpenCharts: true, name: station.name },
        })
      }
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
