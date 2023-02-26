import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Line } from '../../../data/types';
import { RootState, useAppDispatch } from '../../../store/store';
import ReportsCityList from '../ReportsCityList/ReportsCityList';
import { getLines } from '../reportsSlice';
import styles from './ReportsSubway.module.css';

function ReportsSubway(): JSX.Element {
  const [page, setPage] = useState<string>('all');
  const [filteredLines, setFilteredLines] = useState<Line[]>([]);

  const search = useRef<HTMLInputElement>(null);

  const lines: Line[] = useSelector((state: RootState) => state.reports.lines);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLines());
    setFilteredLines(lines);
  }, [dispatch, lines]);

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
          lines={lines}
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
