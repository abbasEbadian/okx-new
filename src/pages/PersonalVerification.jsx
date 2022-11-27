import React from 'react'
import Styled from '@emotion/styled'
import HeaderPersonalVerification from '../components/SubPersonalVerification/HeaderPersonalVerification'
import AfterPassingID from '../components/SubPersonalVerification/AfterPassingID'
import HowToVerify from '../components/SubPersonalVerification/HowToVerify'
import Attention from '../components/SubPersonalVerification/Attention'
import Promise from '../components/SubPersonalVerification/Promise'
import { Card } from '@mui/material'
const PersonalVerificationBody = Styled.div`
  background:var(--body-color);
  min-height:100vh;
`

function PersonalVerification() {
  
  return (
    <PersonalVerificationBody className="container">
      <Card sx={{borderRadius: '32px / 32px'}}>
        <HeaderPersonalVerification/>
        <AfterPassingID/>
        <HowToVerify/>
        <Attention/>
        <Promise/>
      </Card>
    </PersonalVerificationBody>
  )
}

export default PersonalVerification