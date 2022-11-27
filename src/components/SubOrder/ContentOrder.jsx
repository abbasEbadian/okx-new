import React from 'react'
import Styled from '@emotion/styled'
import HeaderOrder from './HeaderOrder';
import OpenOrder from './OpenOrder';
import Footer from '../Footer';

const ContentOrderBody = Styled.div`
    flex-basis: auto;
    flex-grow: 1;
    background-color:var(--gray900); 
    display: flex;
    flex-direction: column;
    
    .open-order{
      border-bottom: 1px solid #555;
    }
    footer{
      padding-block: 12px;
    }
`

function ContentOrder() {
  return (
    <ContentOrderBody className='content-order'>
      <HeaderOrder />
      <OpenOrder className="flex-grow-1  open-order" />
      <Footer />
    </ContentOrderBody>
   
  )
}

export default ContentOrder