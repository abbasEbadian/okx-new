import React from 'react'
import Styled from '@emotion/styled'
import Header from '../components/Header'
import SidebarWallet from '../components/SubWallet/SidebarWallet'
import ContentWallet from '../components/SubWallet/ContentWallet'
import WalletDrawer from '../components/SubWallet/WalletDrawer'
const WalletBody = Styled.div`
    display:flex;
`
function Wallet() {
  return (
    <>
        
        <WalletBody>
            {/* <SidebarWallet/> */}
            <WalletDrawer />
            <ContentWallet/>
        </WalletBody>
    </>
  )
}

export default Wallet