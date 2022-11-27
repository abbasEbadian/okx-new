import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Styled from '@emotion/styled'
import { Link } from '@mui/material'
const HeadSecuritybody = Styled.div`
    display:flex;
    flex-direction:column;
    background:var(--body-color);
    padding-inline:100px;
    padding-block:16px;
    .title-security{
        color:var(--white);
        font-size:24px;

    }
    .security-content{
        .security-items{
            margin-right:20px;
            margin-top:16px;
            .securitt-link{
                color:var(--gray);
                font-size:14px;
                text-decoration:none;
            }
            .check-icone{
                color:var(--green);
            }
            .cancel-icone{
                color:var(--gray800);
            }
        }
    }

`
function HeadSecurity() {
    const CaptionName={
    
        security:"Security",
        factor:"Two-Factor Authentication (2FA)",
        identity:"Identity Verification",
        phishing:"Anti-Phishing Code",
        whitelist:"widthdrawal Whitelist"

      
     };
    return (
    <HeadSecuritybody>
        <div className="container">
            <span className="title-security">{CaptionName.security}</span>
            <div className="security-content d-flex align-items-center">
                
                <div className="security-items d-flex align-items-center">
                    <CheckCircleIcon fontSize='small' className='check-icone'/>
                    <Link className='securitt-link'>{CaptionName.factor}</Link>
                </div>
                <div className="security-items d-flex align-items-center">
                    <CancelIcon fontSize='small' className='cancel-icone'/>
                    <Link className='securitt-link'>{CaptionName.identity}</Link>
                </div>
                <div className="security-items d-flex align-items-center">
                    <CancelIcon fontSize='small' className='cancel-icone'/>
                    <Link className='securitt-link'>{CaptionName.phishing}</Link>
                </div>
                <div className="security-items d-flex align-items-center">
                    <CancelIcon fontSize='small' className='cancel-icone'/>
                    <Link className='securitt-link'>{CaptionName.whitelist}</Link>
                </div>

            </div>
        </div>
    </HeadSecuritybody>
  )
}

export default HeadSecurity