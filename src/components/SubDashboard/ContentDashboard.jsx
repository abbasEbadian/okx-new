import React from 'react'
import Styled from '@emotion/styled'
import UserInfoDashboard from './UserInfoDashboard'
import ItemsDashboard from './ItemsDashboard'
const ContentDashboardBody = Styled.div`
    flex-basis: auto;
    flex-grow: 1;
    background:var(--gray900);
    display:none;
    
`
function ContentDashboard() {
  return (
    <ContentDashboardBody>
        <UserInfoDashboard/>
        <ItemsDashboard/>
    </ContentDashboardBody>
  )
}

export default ContentDashboard