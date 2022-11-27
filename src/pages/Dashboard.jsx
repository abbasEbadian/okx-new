import React from 'react'
import Header from '../components/Header'
import Styled from '@emotion/styled'
import SidebarDashboard from '../components/SubDashboard/SidebarDashboard'
import ContentDashboard from '../components/SubDashboard/ContentDashboard'
import Verify from '../components/SubDashboard/Verify'
import ContentSecurity from './ContentSecurity'
const DashboardBody = Styled.div`
 
  display:flex;
  
 
 
`
function Dashboard() {
  return (
    <>
    <Verify/>
    <Header/>
    <DashboardBody>
      <SidebarDashboard/>
      <ContentDashboard/>
      <ContentSecurity/>
    </DashboardBody>
    </>
  )
}

export default Dashboard