import React, { useState } from 'react';
import { Line } from '../../../data/types';
import ReportsStation from '../ReportsStation/ReportsStation';
import styles from './ReportsLineList.module.css';

type Props = {
  line: Line;
  problemsCount: number;
  isSearch: boolean;
};

function ReportsLineList({
  line,
  problemsCount,
  isSearch,
}: Props): JSX.Element {
  const [isOpenLine, setIsOpenLine] = useState<boolean>(false);

  return (
    <div className={styles.list}>
      <button
        className={styles.item}
        onClick={(): void => setIsOpenLine((prev) => !prev)}
      >
        <img
          className={`${styles.arrow} ${
            isOpenLine || isSearch ? styles.arrow_open : ''
          }`}
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

      {isOpenLine || isSearch ? (
        <div className={styles.stations}>
          {line.stations.map((station) => (
            <ReportsStation station={station} key={station.name} />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ReportsLineList;
