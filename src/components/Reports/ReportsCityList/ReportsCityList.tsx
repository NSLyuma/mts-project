import React, { useState } from 'react';
import { Line, lines } from '../../../data/lines';
import ReportsLineList from '../ReportsLineList/ReportsLineList';
import styles from './ReportsCityList.module.css';

type Props = {
  filteredLines: Line[];
  isSearch: boolean;
};

function ReportsCityList({ filteredLines, isSearch }: Props): JSX.Element {
  const [isOpenCity, setIsOpenCity] = useState<boolean>(false);

  const linesProblemsCount = lines?.map((line) =>
    line.stations.reduce((acc, station) => acc + station.problemsCount, 0),
  );

  const totalProblemsCount = linesProblemsCount.reduce(
    (acc, cur) => acc + cur,
    0,
  );

  return (
    <div className={styles.cities}>
      <button
        className={styles.item}
        onClick={(): void => setIsOpenCity((prev) => !prev)}
      >
        <img
          className={`${styles.arrow} ${
            isOpenCity || isSearch ? styles.arrow_open : ''
          }`}
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

      {isOpenCity || isSearch
        ? filteredLines?.map(
            (line, i) =>
              !!line.stations.length && (
                <ReportsLineList
                  line={line}
                  problemsCount={linesProblemsCount[i]}
                  isSearch={isSearch}
                  key={line.line}
                />
              ),
          )
        : ''}
    </div>
  );
}

export default ReportsCityList;
