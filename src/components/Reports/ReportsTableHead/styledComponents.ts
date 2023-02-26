import { TableCell, tableCellClasses, styled } from '@mui/material';

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 10,
    textAlign: 'left',
    padding: 0,
    borderBottom: '1px solid #e6e6e6',
    color: '#000',
    whiteSpace: 'nowrap',
  },
  '&:first-of-type': {
    paddingLeft: '20px',
  },
  '&:last-of-type': {
    paddingRight: '20px',
  },
}));
