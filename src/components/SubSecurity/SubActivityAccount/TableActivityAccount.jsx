import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styled from '@emotion/styled'
const TableActivityAccountBody =Styled.div`
    .MuiTableHead-root{
        background:var(--gray800);
    }
    .MuiTableBody-root{
        background:var(--gray900);
    }
`

function createData( Date, Source, Status ,IpAddres) {
  return { Date, Source, Status ,IpAddres };
}

const rows = [
  createData( "2022-11-01 14:30:03", "Web", "Completed", "86.105.252.183"),
  createData( "2022-10-03 14:30:03", "Web", "Completed", "86.105.252.183"),
  createData( "2022-10-01 14:30:03", "Web", "Completed", "86.105.252.183"),
  createData( "2022-10-01 14:30:56", "Web", "Completed", "86.105.252.183"),
  createData( "2022-10-01 14:30:03", "ios", "Completed", "86.105.252.183"),
];

export default function TableActivityAccount() {
  return (
    <>
        <TableActivityAccountBody>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="left">Source</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">IpAddres</TableCell>
                
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.Date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.Date}
                    </TableCell>
                    <TableCell align="left">{row.Source}</TableCell>
                    <TableCell align="left">{row.Status}</TableCell>
                    <TableCell align="left">{row.IpAddres}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </TableActivityAccountBody>

    </>
    
  );
}
