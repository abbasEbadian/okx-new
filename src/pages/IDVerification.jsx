import React, { useState } from 'react'
import Styled from '@emotion/styled'
import StepIDVerification from '../components/SubIDVerification/StepIDVerification'
import RecentActorsIcon from '@mui/icons-material/RecentActors';
const IDVerificationBody = Styled.div`
  min-height: 100vh;

  .title-id{
    
    font-size:24px;
    padding-block:32px;
    
  }
`
function IDVerification() {

  return (
    <>
        <IDVerificationBody>
            <div className="container">
                <div className="title-id d-flex align-items-center justify-content-center">
                    <RecentActorsIcon fontSize='large' color='firoozeh'/>
                    <h2 className="title mx-3 mb-1">ID Verification</h2>
                </div>
                <StepIDVerification/>
            </div>
           
        </IDVerificationBody>
    </>
   
  )
}

export default IDVerification