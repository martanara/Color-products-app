import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { 
  TableRow,
  TableCell
} from '@mui/material';

const StyledTableRow = styled(({ backgroundColor, ...props }) => (
  <TableRow { ...props } />
))`
  background-color: #d3d3d3;
  ${(props) => props.backgroundColor && css`
    background-color: ${props.backgroundColor};
  `};
`;

const StyledTableCell = styled(({ fontWeight, ...props }) => (
  <TableCell { ...props } />
))`
  border: 1px solid #ffffff;
  ${(props) => props.fontWeight && css`
    font-weight: ${props.fontWeight};
  `};
`;

export {
  StyledTableRow,
  StyledTableCell
};