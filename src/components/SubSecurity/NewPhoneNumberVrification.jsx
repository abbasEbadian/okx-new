import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom';
const NewPhoneNumberVrificationBody = Styled.div`
.new-phone-number-body{
    .title-new-phone{
        color:var(--white);
        font-size:20px;
    }
}
    .new-phone-number-box{
        .form-body{
            min-width:360px;
            .form-label{
                color:var(--white);
                font-size:14px;
            }
            .form-select{
                max-width:100px;
            }
            .form-group{
                .form-control{
                    background:transparent;
                    border:1px solid #555;
                    border-radius:4px;
                    color:var(--white300);
                }
                margin-bottom:24px;
                .input-form-box{
                    position:relative;
                    .btn-get-code{
                    position:absolute;
                    background:transparent;
                    border:none;
                    color:var(--green);
                    bottom:10px;
                    right:10px;
                    font-size:14px;
                }
                }

            }
            .security-box{
                margin-top:48px;
                .title-security{
                    color:var(--white);
                    font-size:20px;
                    
                }
                .security-unavailable{
                    color:var(--green);
                    text-decoration:none;
                    font-size:15px;
                    margin-bottom:10px;
                }
                .submit{
                    background:var(--green);
                    border:none;
                    color:var(--white);
                    padding-block:8px;
                    margin-block:10px;
                    border-radius:4px;
                }
            }
        }
    

    }
`
function NewPhoneNumberVrification() {
    const CaptionName={
        title:"Enable phone Number Verification",
        title2:"New Phone Number Verification",
        phonenumber:"Phone Number",
        code:"Phone Number Verification Code",
        getcode:"Get Code",
        help1:"Please enter sms authetication code",
        help2:"Enter the 6-digit code sent to  h.h***@gmail.com",
        help3:"Enter the 6-digit code from Binance/Google authetication",
        security:"Security Verification",
        email:"Email Verification Code",
        authetication:"Authetication Code",
        unavailable:"Security Verification unavailable?",
        submit:"Submit"



    };
    return (
    <NewPhoneNumberVrificationBody>
        <div className="new-phone-number-body d-flex flex-column jutify-content-center align-items-center">
           
            <div className="new-phone-number-box d-flex flex-column justify-content-start">
                <span className="title-new-phone">{CaptionName.title2}</span>
                <form action="" className='form-body'>
                    <div className="form-group mt-3">
                        <label htmlFor="" className='form-label'>{CaptionName.phonenumber}</label>
                        <div className="form-items d-flex  align-item-center">
                            <select name="" id="" className='form-select form-control me-2'>
                                <option value="">+98</option>
                                <option value="">+31</option>
                                <option value="">+12</option>
                            </select>
                            <input type="text" className="form-control flex-grow-1" />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='form-label'>{CaptionName.code}</label>
                        <div className="form-items input-form-box">
                            <input type="text" className="form-control flex-grow-1 " />
                            <button className='btn-get-code'>{CaptionName.getcode}</button>    
                         
                        </div>
                        <samll className="form-text">{CaptionName.help1}</samll>
                      
                    </div>
                    <div className="security-box d-flex flex-column justify-content-start">
                        <span className="title-security">{CaptionName.security}</span>
                        <div className="form-group mt-4">
                            <label htmlFor="" className='form-label'>{CaptionName.email}</label>
                            <div className="form-items input-form-box">
                                <input type="text" className="form-control flex-grow-1 " />
                                <button className='btn-get-code'>{CaptionName.getcode}</button>    
                            
                            </div>
                            <samll className="form-text">{CaptionName.help2}</samll>
                        
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="" className='form-label'>{CaptionName.authetication}</label>
                           
                            <input type="text" className="form-control flex-grow-1 " /> 
                            <samll className="form-text">{CaptionName.help3}</samll>
                            
                        
                        </div>
                        <Link className='security-unavailable'>{CaptionName.unavailable}</Link>
                        <button type='submit' className='submit'>{CaptionName.submit}</button>
                    </div>
                </form>
            </div>
        </div>
    </NewPhoneNumberVrificationBody>
  )
}

export default NewPhoneNumberVrification