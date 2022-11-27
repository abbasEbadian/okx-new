import React from 'react'
import {Link} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import Styled from '@emotion/styled'
const AsideWallet = Styled.div`
    -webkit-flex-basis: 20%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    min-width: 300px;
    overflow: auto;
    position: sticky;
    top: 0;
    border-right: 1px solid #555;
    .aside-items{
        align-items:flex-start;
        width:100%;
        .aside-link{
            color:var(--white);
            text-decoration:none  !important;
            width:100%;
            padding-left:20px;
            padding-block:10px;
            svg{
                fill:var(--white300);
            }
            &.active{
                background-color:var(--gray900);
                position:relative;
                &::after{
                    position:absolute;
                    content:" ";
                    top:0;
                    left:0;
                    height:100%;
                    width:2px;
                    background-color:var(--white);

                }
            }





        }

    }
`
function SidebarWallet() {
    const CaptionName = {
        overview: "OverView",
        fiatspot: " Fiat and Spot"
    };
    return (
    <AsideWallet>

    <div className="aside-items d-flex flex-column">
        <Link href='' className='aside-link'>
            <AppsIcon/>
            {CaptionName.overview}
        </Link>
        <Link href='' className='aside-link active'>
            <JoinLeftIcon/>
            {CaptionName.fiatspot}
        </Link>

    </div>
    </AsideWallet>
  )
}

export default SidebarWallet