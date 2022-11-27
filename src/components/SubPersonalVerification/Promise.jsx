import React, { useState } from 'react'
import Styled from '@emotion/styled'
import {Link} from 'react-router-dom'

import { Button, Checkbox, FormControlLabel } from '@mui/material'
const PromiseBody = Styled.div`
    padding-top:32px;
    padding-bottom:80px;
    border-radius:0px 0px 35px 35px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .set-id-link{
        text-decoration:none;
        font-size:14px;
        padding-block:16px;
        padding-inline:32px;
        border-radius:30px;
        margin-top:16px;

    }

`
const text = "I promise that the information provided is my own, and there is no pirating of other people information."
function Promise() {
    const [checked, setChecked] = useState(false)
    return (
    <>
        <PromiseBody>
            <FormControlLabel control={<Checkbox value={checked} color="firoozeh" onChange={ (e) => setChecked(e.target.checked)} />} label={text}   />
            <Link to="/id-verification"><Button className="set-id-link"  variant='contained' color="firoozeh" disabled={!checked}>I'm all set for ID Verification</Button></Link>
        </PromiseBody>
    </>

  )
}

export default Promise