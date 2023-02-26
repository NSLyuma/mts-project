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
  tablePaginationClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ReportsTableHead from '../ReportsTableHead/ReportsTableHead';
import { getComparator, stableSort } from '../../../helpers/sortTableHelper';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { getTable } from '../reportsSlice';

type Props = {
  station: string;
};

const StyledTableCell: any = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
    padding: '2px 5px 2px 0',
  },
  '&:first-of-type': {
    paddingLeft: '20px',
  },
  '&:last-of-type': {
    paddingRight: '20px',
  },
}));

const StyledTablePagination: any = styled(TablePagination)(() => ({
  [`&.${tablePaginationClasses.root}, div`]: {
    minHeight: 0,
  },
  [`&.${tablePaginationClasses.root}, p`]: {
    fontSize: 10,
  },
}));

function ReportsTable({ station }: Props): JSX.Element {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof TableData>('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const table: TableData[] = useSelector(
    (state: RootState) => state.reports.table,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTable());
  }, [dispatch]);

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
            {stableSort(table, getComparator(order, orderBy))
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
          </TableBody>
        </Table>
        <StyledTablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={table.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={'Количество строк:'}
          labelDisplayedRows={(): string =>
            `${page * rowsPerPage + 1}–${
              rowsPerPage * (page + 1) > table.length
                ? table.length
                : rowsPerPage * (page + 1)
            } из ${table.length}`
          }
        />
      </Box>
    </div>
  );
}

export default ReportsTable;
