import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import PaginationWallet from './PaginationWallet';
import { DataGrid } from '@mui/x-data-grid';

const TablewalletBody = Styled.div`
    background:var(--gray900);
    .table-content-wallet{
        padding-block:10px;
        padding-inline:15px;
        margin-inline:15px;
        border-bottom:1px solid #555;
    }
    .value-table-wallet{
        .value-wallet{
            font-size:15px;
            color:var(--white200);

        }
        .value-btc{
            color:var(--gray);
            font-size:13px;
        }
        .action-item{
            .action-link{
                color:var(--green);
                text-decoration:none;
                font-size:15px;
                margin-right:20px;
            }
        }
    }
`
const NAmeBody = Styled.div`
    .logo-name{
    width:30px;
    height:30px;
    background:var(--gray);
    border-radius:50%;
    margin-inline:5px

    }
    .name-value{
        text-decoration:none;
        color:var(--white200);
        font-size:15px;

    }
    .name-value2{
        font-size:13px;
        color:var(--gray);
    }
`
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'Coin',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Total',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Available',
    type: 'number',
    width: 110,
  },
  {
    field: 'age',
    headerName: 'AvailableIn order',
    type: 'number',
    width: 110,
  },
  {
    field: 'age',
    headerName: 'BTC value',
    type: 'number',
    width: 110,
  },
  {
    field: 'age',
    headerName: 'Action',
    type: 'number',
    width: 110,
  }
];


function TableWallet( { estimated, search } ) {
    const wallets = [
        {
            namevalue: "ADA",
            namevalue2: "ADA",
            total: "0.57000000",
            available: "8543.1254865",
            inorder: "0.0000000",
            btc: "0.125482",
            btc2:"2.1548",
            deposit: "Deposit",
            withdrw:"withdraw",
            trade:"Trade"
        },
        {
            namevalue: "ADA",
            namevalue2: "ADA",
            total: "0.57000000",
            available: "8543.1254865",
            inorder: "0.0000000",
            btc: "0.125482",
            btc2:"2.1548",
            deposit: "Deposit",
            withdrw:"withdraw",
            trade:"Trade"
        },
        {
            namevalue: "ADA",
            namevalue2: "ADA",
            total: "0.57000000",
            available: "8543.1254865",
            inorder: "0.0000000",
            btc: "0.125482",
            btc2:"2.1548",
            deposit: "Deposit",
            withdrw:"withdraw",
            trade:"Trade"
        },
        {
            namevalue: "bnm",
            namevalue2: "ADA",
            total: "0.57000000",
            available: "8543.1254865",
            inorder: "0.0000000",
            btc: "0.125482",
            btc2:"2.1548",
            deposit: "Deposit",
            withdrw:"withdraw",
            trade:"Trade"
        }
    ]
    return (
        <>
            <TablewalletBody>
                {
                    wallets.filter( (item) => item.namevalue.toLowerCase().indexOf(search) > -1 ).map( (item, idx) => {
                        return <div className="table-content-wallet d-flex align-items-center">
                        <div className="d-flex" style={{ minWidth: "180px", flex: "180", textDecoration: "none" }}>
                            <NAmeBody>
                                <div className="value-table-wallet d-flex  name-value  align-items-center">
                                    <img src="" alt="" className="logo-name" />
                                    <div className="d-flex flex-column justify-content-start mx-3">
                                        <span className="name-value">{item.namevalue}</span>
                                        <span className="name-value2">{item.namevalue2}</span>
                                    </div>
                                </div>
                            </NAmeBody>
                        </div>
                        <div className="value-table-wallet"  style={{ minWidth: "100px", flex: "100" }}>
                            <span className="value-wallet">{estimated? "************" : item.total}</span>
                        </div>
                        <div className="value-table-wallet"  style={{ minWidth: "150px", flex: "150" }}>
                            <span className="value-wallet">{estimated? "************" : item.available}</span>
                        </div>
                        <div className="value-table-wallet"  style={{ minWidth: "150px", flex: "150" }}>
                            <span className="value-wallet">{estimated? "************" : item.inorder}</span>
                        </div>
                        <div className="value-table-wallet d-flex flex-column"  style={{ minWidth: "150px", flex: "150" }}>
                            <span className="value-wallet ">{estimated? "************" : item.btc}</span>
                            <div className="value-btc-box d-flex align-items-center">
                                <span className="value-btc">~</span>
                                <span className="value-btc">{estimated? "************" : 152.1252} </span>
                            </div>
                        </div>
                        <div className="value-table-wallet"  style={{ minWidth: "220px", flex: "220" }}>
                            <div className="action-item d-flex align-items-center justify-content-start ">
                                <Link className="action-link ">{item.deposit}</Link>
                                <Link className="action-link ">{item.withdrw}</Link>
                                <Link className="action-link ">{item.trade}</Link>
                            </div>
                        </div>
                    </div>
                    })
                }
            </TablewalletBody>
           
        </>

  )
}

export default TableWallet