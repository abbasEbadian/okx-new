import React from 'react'
import Styled from '@emotion/styled'
const PriceBody = Styled.div`
    display:flex;
    align-items:center;
    .Price-amount,.unit-price{
      color:var(--white200);
      font-size:15px;
    }
`
function PriceCryptos({amount}) {
  return (
    <PriceBody>
        <span className="unit-price">$</span>
        <span className="Price-amount">{amount}</span>
  
    </PriceBody>
  )
}

export default PriceCryptos