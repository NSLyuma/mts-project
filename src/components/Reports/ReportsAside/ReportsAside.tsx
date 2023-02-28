import React, { useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import ReportsDevices from '../ReportsDevices/ReportsDevices';
import { openChart } from '../reportsSlice';
import ReportsSubway from '../ReportsSubway/ReportsSubway';
import styles from './ReportsAside.module.css';

function ReportsAside(): JSX.Element {
  const [page, setPage] = useState<string>('subway');

  const dispatch = useAppDispatch();

  return (
    <div className={styles.aside}>
      <div className={styles.head}>
        <button
          className={`${styles.page} ${
            page === 'subway' && styles.page_active
          }`}
          onClick={(): void => setPage('subway')}
        >
          Метро
        </button>

        <button
          className={`${styles.page} ${
            page === 'devices' && styles.page_active
          }`}
          onClick={(): void => {
            setPage('devices');
            dispatch(openChart({ isOpenCharts: false, station: '' }));
          }}
        >
          Список устройств
        </button>
      </div>

      {page === 'subway' ? <ReportsSubway /> : <ReportsDevices />}
    </div>
  );
}

export default ReportsAside;
