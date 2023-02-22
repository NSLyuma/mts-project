import React, { useState } from 'react';
import { lines } from '../../../data/lines';
import ReportsLineList from '../ReportsLineList/ReportsLineList';
import styles from './ReportsCityList.module.css';

function ReportsCityList(): JSX.Element {
  const [isOpenCity, setIsOpenCity] = useState<boolean>(false);

  const totalProblemsCount = lines
    .map((line) =>
      line.stations.reduce((acc, station) => acc + station.problemsCount, 0),
    )
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <div>
      <button
        className={styles.item}
        onClick={(): void => setIsOpenCity((prev) => !prev)}
      >
        <img
          className={`${styles.arrow} ${isOpenCity && styles.arrow_open}`}
          src="/img/arrow.png"
          alt="стрелка"
        />

        <div className={styles.open}>
          <span className={styles.title}>Москва и Московская область</span>

          {!!totalProblemsCount && (
            <span className={styles.problems}>
              Проблем:{' '}
              <span className={styles.problems_count}>
                {totalProblemsCount}
              </span>
            </span>
          )}
        </div>
      </button>

      {isOpenCity && lines.map((line) => <ReportsLineList line={line} />)}
    </div>
  );
}

export default ReportsCityList;
