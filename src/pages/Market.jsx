import React from 'react'
import Styled from '@emotion/styled'
import Header from '../components/Header'
import TabMarket from '../components/SubMarket/TabMarket'
import AllCryptos from '../components/SubMarket/AllCryptos'
const MarketBody = Styled.div`
    
    .title-market{
        color: var(--white300);
        font-size:25px;
        font-weight:bold;
        
    }
    .market-items{
        margin-block:16px;
        background-color: var(--gray900);
        padding-block:16px;
        border-radius:25px 25px 0px 0px;
    }

`
function Market() {
   
    return (
    <>
        <Header/>
        <MarketBody>
            
            <div className="container mt-lg-5">
                <span className="title-market">Market</span>
            </div>
            <div className='market-items'>

                <TabMarket/>
                <AllCryptos/>
            </div>
        </MarketBody>
    </>
  )
}

export default Market