import React from 'react';
import styles from './ReportsTableHead.module.css';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
  tableCellClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import { headCells } from '../../../data/reportsTableHeadcells';
import { Order, TableData } from '../../../data/types';

type Props = {
  order: Order;
  orderBy: string;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableData,
  ) => void;
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 10,
    textAlign: 'left',
    padding: 0,
    borderBottom: '1px solid #e6e6e6',
    color: '#000',
    whiteSpace: 'nowrap',
  },
  '&:first-child': {
    paddingLeft: '20px',
  },
  '&:last-child': {
    paddingRight: '20px',
  },
}));

function ReportsTableHead({
  order,
  orderBy,
  onRequestSort,
}: Props): JSX.Element {
  const createSortHandler =
    (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            className={styles.cell}
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default ReportsTableHead;
