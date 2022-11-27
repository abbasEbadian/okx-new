import React from 'react'
import Styled from '@emotion/styled'
import HeadCryptos from './HeadCryptos'
import TableCryptos from './TableCryptos'
const CryptosBody = Styled.div`
    
`
function AllCryptos() {
  return (
    <>
      <CryptosBody className='container'>
        <HeadCryptos/>
        <TableCryptos/>
        
      </CryptosBody>
    </>

  )
}

export default AllCryptos