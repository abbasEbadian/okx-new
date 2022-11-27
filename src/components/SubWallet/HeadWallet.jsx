import React from 'react'
import Styled from '@emotion/styled'
const HeaderWallet =Styled.div`
    display:flex;
    align-items:center;
    width:100%;
    padding-inline:15px;
    padding-block:32px;
    .title-wallet{
        color:var(--white);
        font-size:24px;

    }

    .head-wallet-title{
        margin-right:auto;
    }
    .spot-items{
        align-items:center;
        .btn-spot{
            background-color:var(--white);
            border:none;
            margin-left:20px;
            border-radius:4px;
            padding:10px;
            font-size:14px;
            &.green{
                background-color:var(--green)
            }
            &.red{
                background-color:var(--red)
            }
        }
    }
`
function HeadWallet() {
    const CaptionName = {
        fiatspot: "Fiat and Spot",
        deposit:"Deposit",
        widthdraw:"Widthdraw",
        transitionhistory:"Transition History"
    };
    return (
    <HeaderWallet>
        <div className="head-wallet-title">
            <span className="title-wallet">
                {CaptionName.fiatspot}

            </span>
        </div>
        <div className="spot-items d-flex">
            <button className='btn-spot green'>{CaptionName.deposit}</button>
            <button className='btn-spot red'>{CaptionName.widthdraw}</button>
            <button className='btn-spot'>{CaptionName.transitionhistory}</button>
        </div>
    </HeaderWallet>
  )
}

export default HeadWallet