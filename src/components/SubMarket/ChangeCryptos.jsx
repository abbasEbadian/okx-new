import React from 'react'
import Styled from '@emotion/styled'
const ChangeBody = Styled.div`
  direction:ltr;
  text-align:right;
  .change,.unit-change{
    font-size:15px
  }
  .up{
    color:var(--green) !important;
  }
  .down{
    color:var(--red) !important;
  }
`
function ChangeCryptos({amount}) {
  return (
    <ChangeBody >
      <div className='down'>
        <span className="change ">{amount}</span>
        <span className="unit-change">%</span>
      </div>
    </ChangeBody>
  )
}

export default ChangeCryptos