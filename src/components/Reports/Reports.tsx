import React from 'react';
import ReportsAside from './ReportsAside/ReportsAside';
import ReportsMain from './ReportsMain/ReportsMain';
import styles from './Reports.module.css';

function Reports(): JSX.Element {
  return (
    <div className={styles.reports}>
      <ReportsAside />

      <ReportsMain />
    </div>
  );
}

export default Reports;
