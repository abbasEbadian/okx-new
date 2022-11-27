import React from 'react'
import Styled from '@emotion/styled'
import UploadIDPhoto from '../SubUploadIDCard/UploadIDPhoto'
import CorrectExample from '../SubUploadIDCard/CorrectExample'
import { Card } from '@mui/material'
const UplaodIDCardBody = Styled.div`
   
    .upload-id-card-body{
        padding: 32px;
        border-radius:20px 20px 0px 0px;
       

    }
`
function UplaodIDCard() {
  return (
    <UplaodIDCardBody>
        <div className="container">
            <Card className="upload-id-card-body">
                <UploadIDPhoto/>
                <CorrectExample/>

            </Card>
        </div>
    </UplaodIDCardBody>
  )
}

export default UplaodIDCard