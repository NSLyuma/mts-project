import React, { useState, useRef } from 'react';
import { Line, lines } from '../../../data/lines';
import ReportsCityList from '../ReportsCityList/ReportsCityList';
import styles from './ReportsSubway.module.css';

function ReportsSubway(): JSX.Element {
  const [page, setPage] = useState<string>('all');
  const [filteredLines, setFilteredLines] = useState<Line[]>(lines);

  const search = useRef<HTMLInputElement>(null);

  const onInputChange = (): void => {
    setFilteredLines(
      lines?.map((line) => ({
        ...line,
        stations: line.stations.filter((station) =>
          search.current
            ? station.name
                .toLowerCase()
                .includes(search.current.value.toLowerCase())
            : station.name,
        ),
      })),
    );
  };

  return (
    <div>
      <div className={styles.pages}>
        <button
          className={`${styles.page} ${page === 'all' && styles.page_active}`}
          onClick={(): void => setPage('all')}
        >
          Станции метро
        </button>

        <button
          className={`${styles.page} ${page === 'basic' && styles.page_active}`}
          onClick={(): void => setPage('basic')}
        >
          Базовые станции
        </button>
      </div>

      <div className={styles.search}>
        <div className={styles.search_container}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Поиск элемента"
            ref={search}
            onChange={onInputChange}
          />
          <img
            className={styles.search_icon}
            src="/img/search.png"
            alt="поиск"
          />
        </div>
      </div>

      {page === 'all' ? (
        <ReportsCityList
          filteredLines={filteredLines}
          isSearch={!!search.current?.value}
        />
      ) : (
        <div>Базовые станции</div>
      )}
    </div>
  );
}

export default ReportsSubway;
