import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styled from '@emotion/styled'

const TableOpenOrderBody = Styled.div`
    margin-inline:24px;
    .MuiPaper-root {
      background-color:transparent;
      .MuiTableCell-head{
        color:var(--gray);
        border-bottom:1px solid var(--white300);
        font-size:13px;
      }
    }
    .MuiTableBody-root {
      background-color:var(--gray900);
      .MuiTableCell-root{
        color:var(--white);
        margin-block:10px;
        border-bottom:1px solid #ddd;
        
      }
    }
`
function createData(Date, Pair,Type, Side, Price, Amount,Filled,total,trigger,Action) {
  return { Date, Pair,Type, Side, Price, Amount,Filled,total,trigger,Action };
}

const rows = [
  createData('2022-04-02 14:13:05', "DAS/USD", "Limit", "Sell","1.35","71.03","0.00%","95.255USD" ,"-","Cancel"),

];

export default function TableOpenOrder() {
  return (
    <TableOpenOrderBody>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Pair</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Side</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Filled</TableCell>
                <TableCell align="right">Freeze</TableCell>
                <TableCell align="right">total</TableCell>
                <TableCell align="right">trigger condetion</TableCell>
                <TableCell align="right">Action</TableCell>
            </TableRow>
            </TableHead>

            <TableBody>
            {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                <TableCell component="th" scope="row">
                    {row.Date}
                </TableCell>

                <TableCell align="right">{row.Pair}</TableCell>
                <TableCell align="right">{row.Type}</TableCell>
                <TableCell align="right" color='error' className='text-danger' >{row.Side}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Amount}</TableCell>
                <TableCell align="right">{row.Filled}</TableCell>
                <TableCell align="right">{row.Filled}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">{row.trigger}</TableCell>
                <TableCell align="right">{row.Action}</TableCell>
                
                </TableRow>
            ))}
            </TableBody>
            
        </Table>
        </TableContainer>
    </TableOpenOrderBody>

  );
}
