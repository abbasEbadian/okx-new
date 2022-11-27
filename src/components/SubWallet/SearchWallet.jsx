import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import HideSmallBalance from './HideSmallBalance';
import { useState } from 'react';
const SearchBody = Styled.div`
    display:flex;
    align-items:center;
    background-color:var(--gray900);
    padding-inline:15px;
    padding-bottom:16px;
    .search-items{
        margin-right:20px;
        border: 1px solid var(--gray);
        padding-block:8px;
        padding-inline:10px;
        border-radius:5px;
        align-items:center;
      .search-input{
        background:transparent;
        border:none;
        color:var(--white);
        
        &::placeholder{
            color:var(--gray);
            font-size:14px;
        }
        &:focus{
          outline:none;
        }
      }
      .btn-search-coin{
        background:transparent;
        border:none;
        color:var(--gray);
        margin-right:10px;
      }
    }
`
function SearchWallet({ search, setSearch, hide, setHide}) {
    return (
    <SearchBody>
        <div className="search-items d-flex ">
            <button className="btn-search-coin"><SearchIcon/></button>
            <input type="text" className="search-input" placeholder="Search Coin" value={search} onChange={ e => setSearch(e.target.value) } />
        </div>
        <HideSmallBalance hide={hide} setHide={setHide}/>
    </SearchBody>
  )
}

export default SearchWallet