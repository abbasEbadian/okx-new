import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'
import HeadActivity from '../components/SubSecurity/SubActivityAccount/HeadActivity'
import TableActivityAccount from '../components/SubSecurity/SubActivityAccount/TableActivityAccount'
import PaginationActivityAccount from '../components/SubSecurity/SubActivityAccount/PaginationActivityAccount'
const AccountActivitiyRecordsBody = Styled.div`
  min-height:100vh;
  background:var(--gray900);
`
function AccountActivitiyRecords() {
  const Caption={
    seurity:'Security'
  };
  return (
    <AccountActivitiyRecordsBody>
      <div className="container">
        <ReturnBtn/>
        <HeadActivity/>
        <TableActivityAccount/>
        <PaginationActivityAccount/>
      </div>
    </AccountActivitiyRecordsBody>
  )
}

export default AccountActivitiyRecords