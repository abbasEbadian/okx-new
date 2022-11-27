import React from 'react'
import {Link} from 'react-router-dom'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Styled from '@emotion/styled'
const FooterBody = Styled.footer`
    display:flex;
    align-items:center;
    background-color:var(--gray900);
    padding-inline:15px;
    .footer-link-items{
        margin-right:auto;
        .footer-link{
        color:var(--gray);
        font-size:13px;
        text-decoration:none;
        margin-right:20px;
        }
        padding-block:10px
    }
    .copy-right-box{
        .copy-right{
            color:var(--gray);
            font-size:13px;
        }
        svg{
            fill:var(--gray);
        }
    }


`
function Footer({ className }) {
    const CaptionName={
        link1:"Home",
        link2:"Download",
        link3:"Support Center",
        link4:"Give Us FaceBook",
        link5:"About us",
        link6:"Cookie perfernce",
        binance:"binance",
        copyright:"2022"
    };
  return (
    <FooterBody className={className}>
        <div className="footer-link-items d-flex algin-items-center">
            <Link className='footer-link'>{CaptionName.link1}</Link>
            <Link className='footer-link'>{CaptionName.link2}</Link>
            <Link className='footer-link'>{CaptionName.link3}</Link>
            <Link className='footer-link'>{CaptionName.link4}</Link>
            <Link className='footer-link'>{CaptionName.link5}</Link>
            <Link className='footer-link'>{CaptionName.link6}</Link>
            
        </div>
        <div className="copy-right-box d-flex algin-items-center">
                <span className="Binance copy-right">{CaptionName.binance}</span>
                <CopyrightIcon fontSize='small'/>
                <span className="2022 copy-right">{CaptionName.copyright}</span>
        </div>

    </FooterBody>
  )
}

export default Footer