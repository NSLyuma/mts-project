import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Characteristic } from '../../../data/types';
import { RootState, useAppDispatch } from '../../../store/store';
import ReportsChartLine from '../ReportsChartLine/ReportsChartLine';
import { getCharacteristics } from '../reportsSlice';
import styles from './ReportsChartsList.module.css';

function ReportsChartsList(): JSX.Element {
  const characteristics: Characteristic[] = useSelector(
    (state: RootState) => state.reports.characteristics,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacteristics());
  }, [dispatch]);

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
        {characteristics.map((characteristic) => (
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
