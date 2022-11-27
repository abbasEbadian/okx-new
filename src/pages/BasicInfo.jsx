import React from 'react'
import Styled from '@emotion/styled'
import SelectNationality from '../components/SubIDVerification/SubBasicInfo/SelectNationality'
import IDType from '../components/SubIDVerification/SubBasicInfo/IDType'
import NameInfo from '../components/SubIDVerification/SubBasicInfo/NameInfo'
import { Card } from '@mui/material'
const BasicInfoBody = Styled.div`
   
    .basic-info-body{
        padding-block:32px;
        padding-inline:52px;
        border-radius:20px 20px 0px 0px;
    }
`
function BasicInfo() {
  return (
    <BasicInfoBody>
        <div className="container">
            <Card className="basic-info-body">
                <form action="#" onSubmit={e => {e.preventDefault()}} >
                    <SelectNationality/>
                    <IDType/>
                    <NameInfo/>

                </form>
            </Card>
        </div>
    </BasicInfoBody>
  )
}

export default BasicInfo