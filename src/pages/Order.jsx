import React from 'react'
import Header from '../components/Header'
import Styled from '@emotion/styled'
import SidebarOrder from '../components/SubOrder/SidebarOrder'
import ContentOrder from '../components/SubOrder/ContentOrder'

const OrederBody = Styled.div`
    display:flex;
    
    height: calc(100vh - 72px);
`

function Order() {
  return (
    <>
        <Header/>
        <OrederBody>
            <SidebarOrder/>
            <ContentOrder/>
        </OrederBody>
        
    </>

  )
}

export default Order