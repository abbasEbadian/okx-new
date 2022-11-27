import React from 'react'
import OpenOrderHead from './OpenOrderHead'
import Styled from '@emotion/styled'
import TableOpenOrder from './TableOpenOrder'
const OpenOrderBody =Styled.div`
    background-color:var(--body-color);
    padding-top:16px;

`
function OpenOrder({ className }) {
  return (
    <OpenOrderBody className={ className }>
        <OpenOrderHead/>
        <TableOpenOrder/>
    </OpenOrderBody>
  )
}

export default OpenOrder