import React, { useState } from 'react';
import { Line } from '../../../data/lines';
import ReportsStation from '../ReportsStation/ReportsStation';
import styles from './ReportsLineList.module.css';

type Props = {
  line: Line;
};

function ReportsLineList({ line }: Props): JSX.Element {
  const [isOpenLine, setIsOpenLine] = useState<boolean>(false);

  const problemsCount = line.stations.reduce(
    (acc, station) => acc + station.problemsCount,
    0,
  );

  return (
    <div className={styles.list}>
      <button
        className={styles.item}
        onClick={(): void => setIsOpenLine((prev) => !prev)}
      >
        <img
          className={`${styles.arrow} ${isOpenLine && styles.arrow_open}`}
          src="/img/arrow.png"
          alt="стрелка"
        />

        <div className={styles.open}>
          <span className={styles.title}>{line.line}</span>

          {!!problemsCount && (
            <span className={styles.problems}>
              Проблем:{' '}
              <span className={styles.problems_count}>{problemsCount}</span>
            </span>
          )}
        </div>
      </button>

      {isOpenLine && (
        <div className={styles.stations}>
          {line.stations.map((station) => (
            <ReportsStation station={station} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReportsLineList;
