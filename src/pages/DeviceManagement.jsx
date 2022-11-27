import React from 'react'
import Styled from '@emotion/styled'
import TableDeviceSecurity from '../components/SubSecurity/TableDeviceSecurity'
import ReturnBtn from '../components/ReturnBtn'

const DeviceManagementBody = Styled.div`
min-height: 100vh;
  .title-box{
    margin-inline:32px;
    padding-top:16px;
    .title{
      color:var(--white);
      font-size:30px;
    }
    .text{
      color:var(--gray);
      font-size:16px;
    }
  }
`
function DeviceManagement() {
  return (
    <DeviceManagementBody className='container'>
      <ReturnBtn />
      <div className="title-box d-flex flex-column">
        <span className="title">Device management</span>
        <span className="text">These device are currently allowed to access your accout</span>
      </div>
      <TableDeviceSecurity/>
    </DeviceManagementBody>
  )
}

export default DeviceManagement