import {
  TableCell,
  TablePagination,
  tableCellClasses,
  tablePaginationClasses,
  styled,
} from '@mui/material';

export const StyledTableCell: any = styled(TableCell)(() => ({
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

export const StyledTablePagination: any = styled(TablePagination)(() => ({
  [`&.${tablePaginationClasses.root}, div`]: {
    minHeight: 0,
  },
  [`&.${tablePaginationClasses.root}, p`]: {
    fontSize: 10,
  },
}));
