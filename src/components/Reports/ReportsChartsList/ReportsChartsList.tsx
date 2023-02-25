import React, { useEffect, useState } from 'react';
import { Characteristic } from '../../../data/mockData';
import ReportsChartLine from '../ReportsChartLine/ReportsChartLine';
import styles from './ReportsChartsList.module.css';

function ReportsChartsList(): JSX.Element {
  const [data, setData] = useState<Characteristic[]>([]);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const url = 'https://api.npoint.io/1ef77a97bf23acc548e2';
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    getData().catch(console.error);
  }, []);

  return (
    <>
      <div className={styles.buttons}>
        <button className={`${styles.page} ${styles.page_left}`}>
          <svg
            className={`${styles.page_arrow} ${styles.page_arrow_left}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
          </svg>
        </button>

        <button className={`${styles.page} ${styles.page_right}`}>
          <svg
            className={`${styles.page_arrow} ${styles.page_arrow_right}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
          </svg>
        </button>
      </div>

      <div className={styles.list}>
        {data.map((characteristic) => (
          <ReportsChartLine
            key={characteristic.name}
            characteristic={characteristic}
          />
        ))}
      </div>
    </>
  );
}

export default ReportsChartsList;
