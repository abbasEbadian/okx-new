import React from 'react'
import HeadContentOrder from './HeadContentOrder'
import TitleContentOrder from './TitleContentOrder'
import Styled from '@emotion/styled'
const HeadOrderBody = Styled.header`
   background-color:var(--gray900);
   padding: 16px;

` 

function HeaderOrder() {
    const CaptionName={
        caption:"Spot",
        title:" Open Orders"
      };
    return (
    <HeadOrderBody className='d-flex flex-column align-items-start' >
        <HeadContentOrder amount={CaptionName.caption}/>
        <TitleContentOrder amount2={CaptionName.title}/>
    </HeadOrderBody>
  )
}

export default HeaderOrder