import React from 'react'
import Styled from '@emotion/styled'
import HeaderCrypto from '../components/SubWallet/SubWidthdrawDeposit/HeaderCrypto'
import ContentCrypto from '../components/SubWallet/SubWidthdrawDeposit/ContentCrypto'
const WithdrawCryptoBody = Styled.div``
function WithdrawCrypto() {
  return (
    <WithdrawCryptoBody>
      <div className='container'>
        <HeaderCrypto/>
      </div>
      <ContentCrypto/>
    </WithdrawCryptoBody>
    
  )
}

export default WithdrawCrypto

