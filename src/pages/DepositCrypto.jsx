import React from 'react'
import Styled from '@emotion/styled'
import HeaderCrypto from '../components/SubWallet/SubWidthdrawDeposit/HeaderCrypto'
import DepositContent from '../components/SubWallet/SubWidthdrawDeposit/DepositContent'
import FAQCrypto from '../components/SubWallet/SubWidthdrawDeposit/FAQCrypto'
import DepositHasnt from '../components/SubWallet/SubWidthdrawDeposit/DepositHasnt'

const DepositCryptoBody = Styled.div`
    .deposit{
        padding-block:16px;
        background:var(--gray900);
        border-radius:30px 30px 0px 0px;
    }
`
function DepositCrypto() {
  return (
    <DepositCryptoBody>
        <div className='container'>
            <HeaderCrypto/>
        </div>
        <div className="deposit">
            <div className=" container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <DepositContent/>
                    </div>
                    <div className="col-lg-4 col-12">
                        <FAQCrypto/>
                        <DepositHasnt/>
                    </div>
                </div>
            </div>
        </div>



    </DepositCryptoBody>
  )
}

export default DepositCrypto