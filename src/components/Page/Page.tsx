import React, { useState } from 'react';
import Analysis from '../Analysis/Analysis';
import Header from '../Header/Header';
import Reports from '../Reports/Reports';

function Page(): JSX.Element {
  const [page, setPage] = useState<string>('reports');

  return (
    <>
      <Header page={page} setPage={setPage} />

      {page === 'reports' ? <Reports /> : <Analysis />}
    </>
  );
}

export default Page;
