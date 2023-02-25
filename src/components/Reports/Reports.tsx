import React, { useReducer } from 'react';
import ReportsAside from './ReportsAside/ReportsAside';
import ReportsMain from './ReportsMain/ReportsMain';
import styles from './Reports.module.css';
import {
  initialReportsState,
  ReportsContext,
  reportsReducer,
} from '../../helpers/reportsStore';

function Reports(): JSX.Element {
  const [state, dispatch] = useReducer(reportsReducer, initialReportsState);

  return (
    <ReportsContext.Provider value={{ state, dispatch }}>
      <div className={styles.reports}>
        <ReportsAside />

        <ReportsMain />
      </div>
    </ReportsContext.Provider>
  );
}

export default Reports;
