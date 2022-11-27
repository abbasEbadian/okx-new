import React, { useState } from 'react'
import Styled from '@emotion/styled'
import HeadWallet from './HeadWallet';
import Estimated from './Estimated';
import SearchWallet from './SearchWallet';
import HeadTableWallet from './HeadTableWallet';
import TableWallet from './TableWallet2';
import PaginationWallet from './PaginationWallet';
const ContentBody =Styled.div`
    width:100%;
    flex-basis: auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
`
function ContentWallet() {
   
    const [estimated, setEstimated] = useState(false) 
    const [search, setSearch] = useState("") 
    const [hide, setHide] = useState(false) 


    return (
    <ContentBody>
        <HeadWallet />
        <Estimated estimated={estimated} setEstimated={setEstimated} />
        <SearchWallet search={search} setSearch={setSearch} hide={hide} setHide={setHide} />
        {/* <HeadTableWallet/> */}
        <TableWallet estimated={estimated} search={search} hide={hide}/>
        {/* <PaginationWallet/> */}
       
    </ContentBody>
  )
}

export default ContentWallet