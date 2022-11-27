import React from 'react'
import Styled from '@emotion/styled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
const TwoFactorAuthenticationBody = Styled.div`
  padding-inline:100px;
  margin-top:32px;
  margin-bottom:48px;
  .title-two-factor-authentication{
    color:var(--white);
    font-size:24px;
    margin-bottom:15px;
  }
  .two-factor-authentication-contnet{
    padding-block:16px;
    border-bottom:1px solid #555;
  }
  .text-two-factor-authentication-box{
    .caption-two-factor-authentication{
      color:var(--white);
      font-size:15px;
      margin-bottom:10px;
    }
    .guide-two-factor-authentication{
      color:var(--gray);
      font-size:13px;
    }
    .having-trouble-link{
      color:var(--green);
      font-size:13px;
    }
  }
  .on-items{
    .on-box{

	    transform: scale(0.9);

      .on{
        color:var(--white);
        font-size:13px;
        margin-left:10px;
      }
      svg{
        color:var(--green);

      }
    }
  }
  .change-remove-box{
    .change-remove-link{
      background:var(--gray800);
      color:var(--white300);
      text-decoration:none;
      border-radius:5px;
      min-width:80px;
      text-align:center;
      font-size:14px;
    }
  }
  .not-link-items{
    .not-link-box{
      svg{
        color:var(--gray) !important;
      }
    }
  }
`
function TwoFactorAuthentication( {setOpen}) {
  const CaptionName={
    
    factor:"Two-Factor Authentication (2FA)",
    notlink:"Not linked",
    enable:"Enable",
    change:"change",
    remove:"Remove",
    on:"On",
    email:"h.**@gmail.com",
    binanacegoogle:"Binance/Google Authenticator (Recommended)",
    phoneverification:"Phone Number Verification",
    emailverification:"Email Address Verification",
    guide1:"Protect your account and transactions.",
    haveingtrouble:"Having trouble?",
  };
  return (
    <TwoFactorAuthenticationBody>
      <div className="container d-flex flex-column">
        <span className="title-two-factor-authentication">{CaptionName.factor}</span>

        <div className="two-factor-authentication-contnet">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="two-factor-authentication-items d-flex align-item-start">
                <div className="img-box"></div>
                <div className="text-two-factor-authentication-box d-flex flex-column align-items-start">
                  <span className="caption-two-factor-authentication">{CaptionName.binanacegoogle}</span>
                  <span className="guide-two-factor-authentication">{CaptionName.guide1}</span>
                  <Link className='having-trouble-link'><Button >{CaptionName.haveingtrouble}</Button></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="on-items d-flex justify-content-between align-items-center">
                <div className="on-box d-flex">
                  <CheckCircleIcon fontSize='small'/>
                  <span className="on">{CaptionName.on}</span>
                </div>
                <div className="change-remove-box d-flex align-item-center ">
                  <Link className='change-remove-link me-4' onClick={() => setOpen(true)}><Button >{CaptionName.change}</Button></Link>
                  <Link className='change-remove-link'><Button >{CaptionName.remove}</Button></Link>
                </div>
              </div>

            </div>
          </div>
            
        </div>
        <div className="two-factor-authentication-contnet">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="two-factor-authentication-items d-flex align-item-start">
                <div className="img-box"></div>
                <div className="text-two-factor-authentication-box d-flex flex-column align-items-start">
                  <span className="caption-two-factor-authentication">{CaptionName.phoneverification}</span>
                  <span className="guide-two-factor-authentication">{CaptionName.guide1}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="on-items not-link-items d-flex justify-content-between align-items-center">
                <div className="on-box d-flex not-link-box">
                  <CancelIcon fontSize='small'/>
                  <span className="on not-link">{CaptionName.notlink}</span>
                </div>
                <div className="change-remove-box enable-box d-flex align-item-center ">
                 
                  <Link className='change-remove-link enable-link'><Button >{CaptionName.enable}</Button></Link>
                </div>
              </div>

            </div>
          </div>
            
        </div>
        <div className="two-factor-authentication-contnet">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="two-factor-authentication-items d-flex align-item-start">
                <div className="img-box"></div>
                <div className="text-two-factor-authentication-box d-flex flex-column align-items-start">
                  <span className="caption-two-factor-authentication">{CaptionName.emailverification}</span>
                  <span className="guide-two-factor-authentication">{CaptionName.guide1}</span>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="on-items email-items d-flex justify-content-between align-items-center">
                <div className="on-box d-flex email-box">
                  <CheckCircleIcon fontSize='small'/>
                  <span className="on email">{CaptionName.email}</span>
                </div>
                <div className="change-remove-box d-flex align-item-center ">
                  <Link className='change-remove-link me-4'><Button >{CaptionName.change}</Button></Link>
                  <Link className='change-remove-link'><Button >{CaptionName.remove}</Button></Link>
                </div>
              </div>

            </div>
          </div>
            
        </div>
      </div>

    </TwoFactorAuthenticationBody>
  )
}

export default TwoFactorAuthentication