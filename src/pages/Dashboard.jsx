import React from 'react'
import Header from '../components/Header'
import Styled from '@emotion/styled'
import DashboardDrawer from '../components/SubDashboard/DashboardDrawer'
// import SidebarDashboard from '../components/SubDashboard/SidebarDashboard'
import ContentDashboard from '../components/SubDashboard/ContentDashboard'
import Verify from '../components/SubDashboard/Verify'
import ContentSecurity from './ContentSecurity'
const DashboardBody = Styled.div`
 
  display:flex;
  
 
 
`
function Dashboard() {
  return (
    <>
      <Verify />

      <DashboardBody>
        <DashboardDrawer />
        <ContentDashboard />
        <ContentSecurity />
      </DashboardBody>
    </>
  )
}

export default Dashboard