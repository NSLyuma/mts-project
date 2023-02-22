import React from 'react';
import ReportsAside from './ReportsAside/ReportsAside';
import ReportsMain from './ReportsMain/ReportsMain';

function Reports(): JSX.Element {
  return (
    <div>
      <ReportsAside />

      <ReportsMain />
    </div>
  );
}

export default Reports;
