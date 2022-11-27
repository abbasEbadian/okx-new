import React from 'react'
import Styled from '@emotion/styled'
import SimpleAccordionOrder from './SimpleAccordionOrder'
const AsideOrder = Styled.aside`
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    min-width: 300px;
    overflow: auto;
    position: sticky;
    top: 0;
    border-right: 1px solid #555;
`

function SidebarOrder() {
  return (
    <AsideOrder>
        <SimpleAccordionOrder/>
    </AsideOrder>
  )
}

export default SidebarOrder