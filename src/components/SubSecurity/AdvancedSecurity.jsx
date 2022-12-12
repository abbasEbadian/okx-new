import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
const AdvancedSecurityBody = Styled.div`
    
    margin-top:32px;
    .title-advanced-security{
        color:var(--white);
        font-size:24px;
        margin-bottom:15px;
    }
    .advanced-security-contnet{
    padding-block:16px;
    border-bottom:1px solid #555;
  }
  .text-advanced-security-box{
    .caption-advanced-security{
      color:var(--white);
      font-size:15px;
      margin-bottom:10px;
    }
    .guide-advanced-security{
      color:var(--gray);
      font-size:13px;
    }

    }
    .change-remove-box{
        .change-remove-link{
        text-decoration:none;
        border-radius:5px;
        min-width:80px;
        text-align:center;
        font-size:14px;
        }
  }



`
function AdvancedSecurity() {
    const CaptionName = {

        advanced: "Advanced Security",
        notlink: "Not linked",
        enable: "Enable",
        change: "change",
        remove: "Remove",
        loginpassword: "Login Password",
        guide: "Login Password is used to log in to your account.",
    };
    return (
        <AdvancedSecurityBody>
            <div className="container d-flex flex-column">
                <span className="title-advanced-security">{CaptionName.advanced}</span>
                <div className="advanced-security-contnet">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="advanced-security-items d-flex align-item-start">
                                <div className="img-box"></div>
                                <div className="text-advanced-security-box d-flex flex-column align-items-start">
                                    <span className="caption-advanced-security">{CaptionName.loginpassword}</span>
                                    <span className="guide-advanced-security">{CaptionName.guide}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="on-items d-flex justify-content-end align-items-center">
                                <div className="change-remove-box d-flex align-item-center ">
                                    <Link className='change-remove-link'><Button  variant='outlined' color="light">{CaptionName.change}</Button></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </AdvancedSecurityBody>
    )
}

export default AdvancedSecurity