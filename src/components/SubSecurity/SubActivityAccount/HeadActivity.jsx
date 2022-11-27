import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Button } from '@mui/material';

const HeadActivityBody = Styled.div`
    display:"flex";
    flex-direction:"column";
    .title-activity{
        color:var(--white);
        font-size:24px;
    }
    .head-activity-items{
        .btns-activity-box{
            margin-right:auto;
            .btn-activity{
                color:var(--white);
                background:transparent;
                border:none;
                font-size:14px;
                margin-top:32px;
                margin-bottom:16px;
                &.active{
                    background:var(--gray800);
                    border-radius:4px;
                    padding-inline:16px;
                    padding-block:5px;
                }
                
            }
        }
        .dis-account-activity-box{
            .dis-account-activity{
                color:var(--gray);
                font-size:14px;
                margin-inline:5px;
            }
            .dis-account-link{
                color:var(--green);
                font-size:15px;
            }
        }
    }


`
function HeadActivity() {
    const Caption={
        title:"Account Activity Records",
        suspicious:"Suspicious account activity?",
        login:"Login Activity",
        security:"Security Activity",
        disable:"Disable account "
    }
    return (
    <HeadActivityBody>
        <span className="title-activity">{Caption.title}</span>
        <div className="head-activity-items d-flex align-items-center">
            <div className="btns-activity-box d-flex align-items-center">
                <button className="btn-activity me-5 active">{Caption.login}</button>
                <button className="btn-activity">{Caption.security}</button>
            </div>
            <div className="dis-account-activity-box d-flex align-items-center">
                <span className="dis-account-activity">{Caption.suspicious}</span>
                <Link className="dis-account-link"><Button>{Caption.disable}</Button></Link>
            </div>
        </div>

    </HeadActivityBody>
  )
}

export default HeadActivity