import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Styled from '@emotion/styled'
const HeadTableBody = Styled.div`
    background:var(--gray900);
    .header-table-wallet-content{
        background-color:var(--gray800);
        margin-inline:15px;
        padding-block:10px;
        border-radius:10px 10px 0px 0px;
        padding-inline:15px;
        .title-head-wallet{
            color:var(--gray);
            font-size:14px;
        }
        .up-down{
            background:transparent;
            border:none;
            color:var(--gray);
        }
    }
`
function HeadTableWallet() {
    const CaptionName={
        cion:"Coin",
        total:"Total",
        available:'Available',
        inorder:"In order",
        btcvalue:"BTC value",
        action:"Action"


    };
    return (
    <HeadTableBody>
        <div className="header-table-wallet-content d-flex align-item-center">
            <div className="caption-head-box" style={{minWidth:"180px",flex:"180"}}>
                <span className="title-head-wallet">{CaptionName.cion}</span>
                <button className="up-down"><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box" style={{minWidth:"100px",flex:"100"}}>
                <span className="title-head-wallet">{CaptionName.total}</span>
                <button className="up-down"><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box" style={{minWidth:"150px",flex:"150"}}>
                <span className="title-head-wallet">{CaptionName.available}</span>
                <button className="up-down"><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box" style={{minWidth:"150px",flex:"150"}}>
                <span className="title-head-wallet">{CaptionName.inorder}</span>
                <button className="up-down"><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box" style={{minWidth:"150px",flex:"150"}}>
                <span className="title-head-wallet">{CaptionName.btcvalue}</span>
                <button className="up-down"><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box" style={{minWidth:"220px",flex:"220"}}>
                <span className="title-head-wallet">{CaptionName.action}</span>
                <button className="up-down"><UnfoldMoreIcon fontSize='small'/></button>
            </div>
        </div>
    </HeadTableBody>
  )
}

export default HeadTableWallet