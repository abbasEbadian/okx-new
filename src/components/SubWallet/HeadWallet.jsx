import React from 'react'
import Styled from '@emotion/styled'
import { Button } from '@mui/material';
const HeaderWallet =Styled.div`
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    width:100%;
    padding-inline:16px 8px;
    .title-wallet{
        color:var(--white);
        font-size:24px;
    }

    .spot-items{
        align-items:center;
        justify-content: flex-end;
        .btn-spot{

            border:none;
            border-radius:4px;
            font-size:14px;
        }
    }
`
function HeadWallet() {
    return (
    <HeaderWallet className='py-4 '>
        <div className="head-wallet-title col-12 col-sm-4">
            <span className="title-wallet"> Fiat and Spot </span>
        </div>
        <div className="spot-items d-flex col-12 col-sm-8 mt-4 mt-sm-0 ">
            <Button className='btn-spot' variant="contained" color="light">Deposit</Button>
            <Button className='btn-spot mx-2' variant="outlined"  color="light">Widthdraw</Button>
            <Button className='btn-spot' variant="outlined"  color="light">Transition History</Button>
        </div>
    </HeaderWallet>
  )
}

export default HeadWallet