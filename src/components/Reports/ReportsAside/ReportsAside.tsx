import React, { useContext, useState } from 'react';
import { ReportsContext } from '../../../store/reportsStore';
import ReportsDevices from '../ReportsDevices/ReportsDevices';
import ReportsSubway from '../ReportsSubway/ReportsSubway';
import styles from './ReportsAside.module.css';

function ReportsAside(): JSX.Element {
  const [page, setPage] = useState<string>('subway');

  const { dispatch } = useContext(ReportsContext);

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
            dispatch({
              type: 'SET_OPEN_CHARTS',
              payload: { isOpenCharts: false, name: '' },
            });
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
