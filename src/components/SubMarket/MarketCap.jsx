import React from 'react'
import Styled from '@emotion/styled'
const MarketCapBody = Styled.div`
  display:flex;
  align-items:center;
  .market-cap,.unit-market-cap{
    color:var(--white200);
    font-size:15px;
  }
`
function MarketCap({amount}) {
  return (
    <MarketCapBody>
        <span className="unit-market-cap">%</span>
        <span className="market-cap">{amount}</span>
        <span className="unit-market-cap">M</span>
    </MarketCapBody>
  )
}

export default MarketCap