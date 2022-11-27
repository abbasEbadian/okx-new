import React from 'react'
import Warning from '../img/undraw_warning.svg' 
import CircleIcon from '@mui/icons-material/Circle';
import Styled from '@emotion/styled'

const SecurityBinanceGoogleAuthenticatorBtnBody = Styled.div`
    
    .security-binance-google-authenticator-box{
       
        padding-block:16px;
        margin-inline:350px;
        padding-inline:16px;
        .are-you{
            color:var(--white);
            font-size:24px;
            margin-block:10px;
        }
        .payment-sevice-box{
            color:var(--gray);
            svg{
                transform:scale(0.3);
               
            }
            .text-payment{
                font-size:16px;
            }
        }
        
        .btns-box{
            .btn-binance-google-authenticator{
                border:none;
                padding-block:10px;
                padding-inline:40px;
                border-radius:5px;
                font-size:14px;
            }
            .btn-confirm{
                color:var(--gray800);
                background:var(--green);
                

            }
            .btn-cancel{
                color:var(--white);
                background:var(--gray);
            }
        }

    }
`
function SecurityBinanceGoogleAuthenticatorBtn() {
  return (
    <SecurityBinanceGoogleAuthenticatorBtnBody>
        <div className="security-binance-google-authenticator-box d-flex flex-column align-items-center justify-content-center ">
            <img src={Warning} alt="" width={200} className="mx-auto"/>
            <span className="are-you ">Are you Sure you want to change Binance/Google authenticator?</span>
            <div className="payment-sevice-box d-flex align-items-start ">
                <CircleIcon/>
                <p className="text-payment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in 
                </p>
            </div>
          
        </div>
    </SecurityBinanceGoogleAuthenticatorBtnBody>
  )
}

export default SecurityBinanceGoogleAuthenticatorBtn