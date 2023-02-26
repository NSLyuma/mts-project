import React, { useEffect, useState } from 'react';
import { Order, TableData } from '../../../data/types';
import styles from './ReportsTable.module.css';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ReportsTableHead from '../ReportsTableHead/ReportsTableHead';
import { getComparator, stableSort } from '../../../helpers/sortTableHelper';

type Props = {
  station: string;
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    padding: 0,
  },
}));

function ReportsTable({ station }: Props): JSX.Element {
  const [data, setData] = useState<TableData[]>([]);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof TableData>('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const url = 'https://api.npoint.io/1e37c5287711e07d1fe7';
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log('DATA', data);
    };

    getData().catch(console.error);
  }, []);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TableData,
  ): void => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <div className={styles.layout}>
      <p className={styles.title}>Таблица метрик: {station}</p>
      <Box className={styles.table} sx={{ width: '100%' }}>
        <Table size="small">
          <ReportsTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(data, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow hover tabIndex={-1} key={item.id}>
                  <StyledTableCell>{item.date}</StyledTableCell>
                  <StyledTableCell>{item.cellId}</StyledTableCell>
                  <StyledTableCell>{item.rat}</StyledTableCell>
                  <StyledTableCell>{item.bandMTS}</StyledTableCell>
                  <StyledTableCell>{item.bandMF}</StyledTableCell>
                  <StyledTableCell>{item.coveringMTS}</StyledTableCell>
                  <StyledTableCell>{item.coveringMF}</StyledTableCell>
                  <StyledTableCell>{item.qualityMTS}</StyledTableCell>
                  <StyledTableCell>{item.qualityMF}</StyledTableCell>
                  <StyledTableCell>{item.speedMTS}</StyledTableCell>
                  <StyledTableCell>{item.speedMF}</StyledTableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow>
                <StyledTableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={'Количество строк:'}
          labelDisplayedRows={(): string =>
            `${page * rowsPerPage + 1}–${
              rowsPerPage * (page + 1) > data.length
                ? data.length
                : rowsPerPage * (page + 1)
            } из ${data.length}`
          }
        />
      </Box>
    </div>
  );
}

export default ReportsTable;
