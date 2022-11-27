import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import PaginationWallet from "./PaginationWallet";
import logo from "../../img/CardanoAdalogo.png";
import {Link} from 'react-router-dom'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const rows = [
  {
    namevalue: "ADA",
    namevalue2: "ADA",
    total: "0.57000000",
    available: "0.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "ADA",
    namevalue2: "ADA",
    total: "0.57000000",
    available: "0.1954865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "ADA",
    namevalue2: "ADA",
    total: "0.57000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
  {
    namevalue: "bnm",
    namevalue2: "ADA",
    total: "0.67000000",
    available: "8543.1254865",
    inorder: "0.0000000",
    btc: "0.125482",
  },
];
const headCells = [
  {
    id: "namevalue",
    numeric: false,
    disablePadding: true,
    label: "Coin",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  {
    id: "available",
    numeric: true,
    disablePadding: false,
    label: "Available",
  },
  {
    id: "inorder",
    numeric: true,
    disablePadding: false,
    label: "In Order",
  },
  {
    id: "frozen",
    numeric: true,
    disablePadding: false,
    label: "Frozen",
  },
  {
    id: "btc",
    numeric: true,
    disablePadding: false,
    label: "BTC value",
  }
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell> Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable({ estimated, search, hide }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };



  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box className="px-3 mb-5 py-5" color={'dark'}>
      <Paper color="dark" >
        <TableContainer color='dark'>
          <Table aria-labelledby="tableTitle" size={dense ? "small" : "medium"} >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .filter(item => item.namevalue.toLowerCase().indexOf( search.toLowerCase() ) > -1)
                .filter(item => !hide || (hide && item.available > 0.2))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        className="ps-2"
                      >
                        <img
                          src={logo}
                          alt=""
                          className="logo-name me-2"
                          width="32"
                          height={28}
                        />
                        {row.namevalue}
                      </TableCell>
                      <TableCell align="right">{estimated? "****************":row.total}</TableCell>
                      <TableCell align="right">{estimated? "****************":row.available}</TableCell>
                      <TableCell align="right">{estimated? "****************":row.inorder}</TableCell>
                      <TableCell align="right">0</TableCell>
                      <TableCell align="right">{estimated? "****************":row.btc}</TableCell>
                      <TableCell align="right">
                        <div className="action-item d-flex align-items-center justify-content-start ">
                          <Link className="action-link ">Deposit</Link>
                          <Link className="action-link ">Withdraw</Link>
                          <Link className="action-link ">Trade</Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
        <PaginationWallet />
      </Paper>
    </Box>
  );
}
