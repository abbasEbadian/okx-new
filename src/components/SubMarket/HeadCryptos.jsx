import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Styled from '@emotion/styled'
const HeaderCryptos = Styled.div`
    background-color:var(--body-color);
    border-radius:4px;
    padding-inline:16px;
    padding-block:10px;
    margin-top:16px;
    .title-head-cryptos{
        color:var(--white);
        font-size:12px;
        background:transparent;
        border:none;
        &.active{
            color:var(--green);
        }
    }
    .up-down{
        background:transparent;
        border:none;
        color:var(--white);

    }
    .caption-head-box{
        display: flex;
        align-items:center;
    }
`
function HeadCryptos() {
    const CaptionName={
        name:"Name",
        price:"Price",
        change:'Change',
        volume:"voltme",
        marketcap:"Market Cap",
        oneh:"1h",
        twoh:"2h",
        fourh:"24h"

    };
    return (
    <HeaderCryptos>
        <div className="header-content d-flex  align-items-cemter">
            <div className="caption-head-box " data-area="left" style={{minWidth:"220px",flex:"220"}} >
                <span className="title-head-cryptos d-block">{CaptionName.name}</span>
                <button className='up-down'><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box"  data-area="left" style={{minwidth:"100px",flex:"100"}}>
                <span className="title-head-cryptos">{CaptionName.price}</span>
                <button className='up-down'><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box justify-content-end d-flex align-items-center" data-area='right' style={{minWidth:"190px",flex:"190"}}>
                <button className="title-head-cryptos mx-1 active">{CaptionName.oneh}</button>
                <button className="title-head-cryptos">{CaptionName.twoh}</button>
                <button className="title-head-cryptos mx-1">{CaptionName.fourh}</button>
                <button className="title-head-cryptos">{CaptionName.change}</button>
                <button className='up-down'><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box d-flex justify-content-end" data-area='right' style={{minWidth:"130px",flex:"130"}}>
                <span className="title-head-cryptos">{CaptionName.volume}</span>
                <button className='up-down'><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box d-flex justify-content-end" data-area='right' style={{minWidth:"130px",flex:"130"}}>
                <span className="title-head-cryptos">{CaptionName.marketcap}</span>
                <button className='up-down'><UnfoldMoreIcon fontSize='small'/></button>
            </div>
            <div className="caption-head-box d-flex justify-content-end" data-area='right' style={{minWidth:"180px",flex:"180"}}></div>

        </div>
    </HeaderCryptos>
  )
}

export default HeadCryptos