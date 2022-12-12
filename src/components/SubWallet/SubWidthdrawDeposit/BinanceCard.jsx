import React from 'react'
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import EastIcon from '@mui/icons-material/East';
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';

const BinanceCardBody = Styled.div`
    margin-block:32px;
    padding-inline:16px;
    padding-block:10px;
    background:var(--body-color);
    border-radius:10px;
    .link-items{
        text-decoration:none;
       
    }
    
    .title-box{
        text-decoration:none;
        color:var(--white);
        .title{
            margin-left:10px;
            font-size:15px;
        }
    }
    .binance-card-content-link{
        margin-top:10px;
        .text{
            color:var(--gray);
            font-size:14px;
            
        }
        svg{
            background:var(--gray900);
            color:var(--white);
            padding:5px;
            border-radius:50%
        }
    }
`
function BinanceCard() {
  return (
    <>
    <BinanceCardBody>
        <Link className='link-items'>
            <div className="binance-card-body d-flex flex-column align-items-start">
                <div className="title-box d-flex align-items-center">
                    <PriceChangeIcon/>
                    <span className="title"> Binance Card</span>
                </div>
                <div className="binance-card-content-link d-flex align-items-start">
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    <EastIcon/>
                </div>

            </div>
        </Link>
    </BinanceCardBody>
    </>
  )
}

export default BinanceCard