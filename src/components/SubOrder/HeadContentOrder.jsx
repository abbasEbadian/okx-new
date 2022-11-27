import React from 'react'
import Styled from '@emotion/styled'
const HeadOrder = Styled.div`
    
    .caption-head-order{
        font-size:16px;
        color:var(--gray);
        font-weight:500;
    }

`
function HeadContentOrder({amount}) {
    
    return (
    <HeadOrder>
        <span className="caption-head-order">{amount}</span>
    </HeadOrder>
  )
}

export default HeadContentOrder