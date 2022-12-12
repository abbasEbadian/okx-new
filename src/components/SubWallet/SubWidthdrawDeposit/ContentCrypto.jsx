import React from 'react'
import Styled from '@emotion/styled'
import WithdrawContent from './WithdrawContent'
import FAQCrypto from './FAQCrypto'
import BinanceCard from './BinanceCard'
import BTCBalance from './BTCBalance'
const ContentCryptoBody = Styled.div`
    padding-block:16px;
    background:var(--gray900);
    border-radius:30px 30px 0px 0px; 
`
function ContentCrypto() {
  return (
    <ContentCryptoBody>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <WithdrawContent/>
                    <BTCBalance/>
                </div>
                <div className="col-lg-4 col-12">
                    <FAQCrypto/>
                    <BinanceCard/>
                </div>
            </div>
        </div>
    </ContentCryptoBody>
  )
}

export default ContentCrypto