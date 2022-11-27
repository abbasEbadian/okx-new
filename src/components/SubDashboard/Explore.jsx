import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const ExploreBody = Styled.div`
.explore-items{
    margin-top:48px;
    .title-explore{
        color:var(--white);
        font-size:20px;
        margin-bottom:16px;
    }
    .search-explore-box{
        border:1px solid #555;
        border-radius:5px;
        .search-input-explore{
            background:transparent;
            border:none;
            color:var(--white);
            font-size:14px;
            margin-inline:15px;
            padding-block:10px;
            &::placeholder{
                font-size:13px;
                color:var(--gray);
            }
            &:focus{
                outline:none;
            }

        }
        .btn-search-explore{
            background:var(--green);
            border:none;
            color:var(--gray900);
            border-radius:50%;
            width:30px;
            height:29px;
            margin-inline:10px;
        }
    }
}
`
   
function Explore() {
    const CaptionName = {
        explore: "Explore",
        input:"Coin,Function,Announcement",
        buycrypto:"BuyCrypto"
    
      };
    return (
    <ExploreBody>
        <div className="explore-items d-flex flex-column">
            <span className="title-explore">{CaptionName.explore}</span>
            <div className="search-explore-box d-flex align-items-center">
                <input type="text" className="search-input-explore flex-grow-1" placeholder={CaptionName.input} />
                <button className='btn-search-explore'><SearchIcon fontSize='small'/></button>
            </div>
        </div>
    </ExploreBody>
  )
}

export default Explore