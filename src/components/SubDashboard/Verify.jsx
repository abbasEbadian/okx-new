import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { Button } from '@mui/material';
const VerifyBody = Styled.div`
    padding-inline:100px;
    padding-block: 10px;
   
    .verify-link{
        text-decoration:none;
        border-radius:5px;
        min-width:100px;
        text-align:center;
    }
`
function Verify() {
    const CaptionName = {
        learn: "Learn more",
        Text:"complete Verification to access Binance products and service",
        verify:" Verify"

    };
    return (
    <VerifyBody>
        <div className="container">
            <div className="verify-item d-flex justify-content-between align-item-center">
                <div className="text-verify-box">
                    <DisplaySettingsIcon/>
                    <span className="text-verify">{CaptionName.Text}</span>
                    <Link className='mx-3' ><Button>{CaptionName.learn}</Button></Link>

                </div>
                <Link to="/personal-verification"><Button variant='contained' >{CaptionName.verify}</Button></Link>
            </div>
        </div>
    </VerifyBody>
  )
}

export default Verify