import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GradeIcon from '@mui/icons-material/Grade';
import Styled from '@emotion/styled'
const TabsMarket = Styled.div`
    display: flex;
    align-items: center;
    margin-top:32px;
    width:100%
    margin-bottom:32px;
    .tab-market-link{
        background: none;
        margin-right:16px;
        color:var(--gray);
        font-size:15px;
        text-decoration:none;
        padding:10px;
        border:none;
        &.active{
            background:var(--white);
            color:var(--gray900);
            border-radius:4px;
        }
        &:hover{
            background:var(--body-color);
            color:var(--gray);
            padding:10px;
            border-radius:4px;

        }
    }
    .search-box{
        background:transparent;
        border:1px solid var(--gray);
        padding-block:10px;
        padding-inline:8px;
        border-radius:5px;
       svg{
        color:var(--gray);
       }
       &:hover{
            border-color:var(--white)
        }
        .search-input{
            border:none;
            background-color:transparent;
            color:var(--white);
            &:focus-visible{
                outline:none;
            }


        }
    }

    
`
function TabMarket() {
    const [activeTab, setActiveTab] = useState('favorites')
    const changeActiveTab = (id) => setActiveTab(id)

    return (
    <>
        <TabsMarket className='container'>
            <div className="tab-items d-flex w-100 justify-content-between align-items-center">
                <div className="tabs d-flex align-items-center">
                    <button className={`tab-market-link ${activeTab==='favorites'?'active':''} d-flex align-items-center`} id="Favorite" date-className="Favorite" onClick={e=>changeActiveTab('favorites')}>
                        <GradeIcon fontSize='small' className='me-1'/> Favorites
                    </button>
                    <button className={`tab-market-link ${activeTab==='all'?'active':''}`} id="Cryptos" date-className="Cryptos" onClick={e=>changeActiveTab('all')}> All Cryptos </button>
                </div>
                <div className="search-box">
                    <SearchIcon/>
                    <input type="text" className='search-input' placeholder={"Search Coin Name"} />
                </div>
            </div>
        </TabsMarket>
    </>

  )
}

export default TabMarket