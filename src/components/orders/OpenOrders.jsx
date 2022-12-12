import React from 'react'
import { IconButton, Collapse, Container, Box, Typography, Select, TextField, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material'
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function OpenOrders() {
  function createData(name, crypto, type, side, Average, Price, Executed, Amount, Total, TriggerConditions, Status) {
    return { name, crypto, type, side, Average, Price, Executed, Amount, Total, TriggerConditions, Status };
  }

  const rows = [
    createData('2021-03-31 11:03:18', 'BTCUSDT', 'Market', 'buy', '58985.25', "Market", '0.00005458', '0.0002154', "31.70 USDT", "-", "Filled", 4.0),
  ];

  const filter = [
    { value: "all", label: "all" }
  ]
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <Box className="container-fluid">
      <Box className="row gx-0 p-4">
        <Typography>Spot</Typography>
        <Typography variant="h4">
          Open Orders
        </Typography>
      </Box>
      <Box className=" mt-5">
        <div className="row d-flex justify-content-between align-items-center flex-wrap">
          <div className='row  col-12 col-lg-8  mb-4 '>
            <div className="col-4">
              <TextField
                color="light"
                label="Filter"
                size="small"
                select

                fullWidth
              >
                {filter.map((item, idx) => (
                  <MenuItem value={item.value} key={idx}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col-4 ">
              <TextField
                color="light"
                label="Pair"
                size="small"
                select

                fullWidth
              >
                {filter.map((item, idx) => (
                  <MenuItem value={item.value} key={idx}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="col-4">
              <TextField
                color="light"
                size="small"
                label="Side"
                select
                fullWidth
              >
                {filter.map((item, idx) => (
                  <MenuItem value={item.value} key={idx}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>



          </div>


          <div className='col-12 col-lg-4 d-flex justify-content-end mb-4'>
            <Button variant="contained" disabled>
              Clear All Filters
            </Button>
          </div>
        </div>
      </Box>
      <TableContainer sx={{ mt: "2%" }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#8c8e90" }}>data</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>pair</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>type</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>side</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>price</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>amount</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>freeze</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>filled</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>total</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>trigger conditions</TableCell>
              <TableCell align="right" sx={{ color: "#8c8e90" }}>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.crypto}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right" sx={row.side === "buy" ? { color: "#05c48e" } : { color: "#df473d" }}>{row.side}</TableCell>
                <TableCell align="right">{row.Average}</TableCell>
                <TableCell align="right">{row.Price}</TableCell>
                <TableCell align="right">{row.Executed}</TableCell>
                <TableCell align="right">{row.Amount}</TableCell>
                <TableCell align="right">{row.Total}</TableCell>
                <TableCell align="center" >{row.TriggerConditions}</TableCell>
                <TableCell align="right" sx={row.side === "Filled" ? { color: "#df473d" } : { color: "#05c48e" }}>{row.Status}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  )
}