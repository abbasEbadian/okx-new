import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Styled from '@emotion/styled'
import { Link } from '@mui/material'
const HeadSecuritybody = Styled.div`
    display:flex;
    flex-direction:column;
    background:var(--body-color);
    padding-block:16px;
    .main {
        padding-bottom: 16px;
        border-bottom: 3px solid var(--gray)
    }
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
    
        security:"Security setting",
        factor:"Two-Factor Authentication (2FA)",
        identity:"Identity Verification",
        phishing:"Anti-Phishing Code",
        whitelist:"widthdrawal Whitelist"

      
     };
    return (
    <HeadSecuritybody>
        <div className="container main">
            <span className="title-security">{CaptionName.security}</span>
        </div>
    </HeadSecuritybody>
  )
}

export default HeadSecurity