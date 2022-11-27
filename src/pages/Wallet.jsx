import React from 'react'
import Styled from '@emotion/styled'
import Header from '../components/Header'
import SidebarWallet from '../components/SubWallet/SidebarWallet'
import ContentWallet from '../components/SubWallet/ContentWallet'
const WalletBody = Styled.div`
    display:flex;
`
function Wallet() {
  return (
    <>
        <Header/>
        <WalletBody>
            <SidebarWallet/>
            <ContentWallet/>
        </WalletBody>
    </>
  )
}

export default Wallet