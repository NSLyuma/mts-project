import React, { useState } from 'react';
import ReportsDevices from '../ReportsDevices/ReportsDevices';
import ReportsSubway from '../ReportsSubway/ReportsSubway';
import styles from './ReportsAside.module.css';

function ReportsAside(): JSX.Element {
  const [page, setPage] = useState<string>('subway');

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
          onClick={(): void => setPage('devices')}
        >
          Список устройств
        </button>
      </div>

      {page === 'subway' ? <ReportsSubway /> : <ReportsDevices />}
    </div>
  );
}

export default ReportsAside;
