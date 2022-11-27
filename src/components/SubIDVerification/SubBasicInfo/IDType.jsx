import React, { useState } from 'react'
import Styled from '@emotion/styled'
import { Button } from '@mui/material';
const IDTypeBody = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    padding-top:50px;
    .title{
        font-size:15px;
    }
    .id-type-items{
        margin-top:16px;
        .id-type{
           
            padding-inline:8px;
            min-width:130px;
            padding-block:8px;
            border-radius:4px;
            &.active{
                border:none;    
            }
        }
    }
`
function IDType() {
    const CaptionName={
        title:"ID Type",
        idcard:"ID Card",
        passport:"Passport",
        driver:"Drivers license"
    };
    const [type, setType] = useState("idcard")
    return (
    <IDTypeBody>
        <span className="title">{CaptionName.title}</span>
        <div className="id-type-items d-flex align-items-center justify-content-start">
            <Button  variant={type === 'idcard' ? 'contained': 'text'}  onClick={() => setType('idcard')}>{CaptionName.idcard}</Button>
            <Button className="mx-4" variant={type === 'passport' ? 'contained': 'text'} onClick={() => setType('passport')}>{CaptionName.passport}</Button>
            <Button variant={type === 'driver' ? 'contained': 'text'} onClick={() => setType('driver')}>{CaptionName.driver}</Button>

        </div>
    </IDTypeBody>
  )
}

export default IDType