import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const BTCBalanceBody = Styled.div`
    margin-inline:32px;
    .btc-balance-body{
        .btc-balance-box{
            .btc-items{
                .caption-value{
                    color:var(--gray);
                    font-size:14px;
                }
                .btc-value-box{
                    color:var(--white300);
                    font-size:15px;
                }
                .Busd-value-box{
                    color:var(--red);
                    font-size:15px;
                }
                .get-withdrawal-limit-Link{
                    text-decoration:none;
                    color:var(--white);
                    font-size:15px;
                }
            }
        }
    }
`
function BTCBalance() {
  return (
    <BTCBalanceBody>
        <div className="btc-balance-body">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="btc-balance-box d-flex flex-column align-items-start">
                                <div className="btc-items">
                                    <span className="caption-value">BTC balance</span>
                                    <div className="btc-value-box">
                                        <span className="amount">0.00000301</span>
                                        <span className="unit mx-1">BTC</span>
                                    </div>
                                </div>
                                <div className="btc-items">
                                    <span className="caption-value">Network fee</span>
                                    <div className="btc-value-box">
                                        <span className="amount">0.000051</span>
                                        ~
                                        <span className="amount">0.0002</span>
                                        <span className="unit mx-1">BTC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="btc-balance-box d-flex flex-column align-items-start">
                                <div className="btc-items">
                                    <span className="caption-value">Minimum withdrawal</span>
                                    <div className="btc-value-box d-flex alin-items-center">
                                        <span className="amount">0.00001</span>
                                        <span className="unit mx-1">BTC</span>
                                    </div>
                                </div>
                                <div className="btc-items">
                                    <span className="caption-value">24h remaining limit</span>
                                    <div className="Busd-value-box  d-flex alin-items-center">
                                        <span className="amount">160,000,00</span>
                                        <span className="unit mx-1">BUSD</span>
                                        /
                                        <span className="amount ms-1">160,000,00</span>
                                        <span className="unit mx-1">BUSD</span>
                                    </div>
                                    <Link className='d-flex align-items-center get-withdrawal-limit-Link '>
                                        <span className="get-withdrawal-limit">Get higher withdrawal limit</span>
                                        <ChevronRightIcon/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            

        </div>
    </BTCBalanceBody>
  )
}

export default BTCBalance