import React, { useState } from 'react';
import ReportsCityList from '../ReportsCityList/ReportsCityList';
import styles from './ReportsSubway.module.css';

function ReportsSubway(): JSX.Element {
  const [page, setPage] = useState<string>('all');

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

      <div className={styles.stations}>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Поиск элемента"
          />
          <img
            className={styles.search_icon}
            src="/img/search.png"
            alt="поиск"
          />
        </div>
      </div>

      {page === 'all' ? <ReportsCityList /> : <div>Базовые станции</div>}
    </div>
  );
}

export default ReportsSubway;
