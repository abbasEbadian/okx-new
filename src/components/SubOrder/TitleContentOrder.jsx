import React from 'react'
import Styled from '@emotion/styled'
const TitleHead= Styled.div`
    .title-head-order{
        color:var(--white);
        font-size:40px;
        font-weight:600;
    }

`
function TitleContentOrder({amount2}) {
  return (
    <TitleHead> <span className="title-head-order">{amount2}</span></TitleHead>
  )
}

export default TitleContentOrder