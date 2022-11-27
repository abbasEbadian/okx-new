import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import EstimatedBinance from '../EstimatedBinance';
const EstimatedDashboardBody = Styled.div`
    .estimated-binance-link-items{
      .estimated-binance-link{
        text-decoration:none;
        font-size:14px;
        background:var(--gray);
        color:var(--white);
        padding-block:5px;
        border-radius:5px;
        padding-inline:5px;
        min-width:80px;
        text-align:center;
      }
    }
`
function EstimatedDashboard() {
  const CaptionName = {
    deposit: "Deposit",
    withdraw:"Withdraw",
    buycrypto:"BuyCrypto"

  };
  return (
    <EstimatedDashboardBody>
        <div className="row m-0">
            <div className="col-lg-6 col-12">
                <EstimatedBinance/>
            </div>
            <div className="col-lg-6 col-12 p-0">
              <div className="estimated-binance-link-items d-flex align-items-center justify-content-end">
                <Link  href='' className='estimated-binance-link me-3'>{CaptionName.deposit}</Link>
                <Link  href='' className='estimated-binance-link me-3'>{CaptionName.withdraw}</Link>
                <Link  href='' className='estimated-binance-link'>{CaptionName.buycrypto}</Link>

              </div>
            </div>
        </div>
    </EstimatedDashboardBody>
  )
}

export default EstimatedDashboard