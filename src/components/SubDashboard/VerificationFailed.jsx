import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
const VerificationFailedBody = Styled.div`
    background-color:var(--gray800);
    padding-inline:32px;
    padding-block:32px;
    border-radius:10px;
    margin-block:48px;
    margin-left:16px;
    .verification-failed-content{
        .verification-img{
        width:500px;
        margin-left:auto;
        }
        .verification-failed-box{
            .title-verification-failed{
                color:var(--white);
                font-size:24px;
                font-weight:600;
            }
            .text-verification-failed{
                color:var(--gray);
                font-size:14px;
            }
            .link-verification-failed{
                background:var(--gray);
                width:30%;
                color:var(--white);
                text-decoration:none;
                padding-block:10px;
                border-radius:5px;
                text-align:center;

            }
        }
        
    }

`
function VerificationFailed() {
    const CaptionName = {
        titleverification: "Verification Failed",
        textverification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        viewdetail: "View Detail",
    };
    return (
    <VerificationFailedBody>
        <div className="verification-failed-content d-flex align-items-center">
            <div className="verification-failed-box d-flex flex-column align-item-start">
                <span className="title-verification-failed">{CaptionName.titleverification}</span>
                <p className="text-verification-failed">{CaptionName.textverification}</p>
                <Link className='link-verification-failed'>{CaptionName.viewdetail}</Link>
            </div>
            <div className="verification-img">

            </div>

        </div>
    </VerificationFailedBody>
  )
}

export default VerificationFailed