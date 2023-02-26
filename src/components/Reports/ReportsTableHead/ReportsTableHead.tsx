import React from 'react';
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
    align: 'left',
    padding: 0,
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
