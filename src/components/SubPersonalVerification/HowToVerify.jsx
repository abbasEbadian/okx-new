import React from 'react';
import Styled from '@emotion/styled';
import face from '../../img/face.svg';
import basic from '../../img/basic.svg';
import upload from '../../img/upload.svg';
const HowToVerifyBody = Styled.div`
    padding:32px 48px;
    .how-to-verify-box{
        .title{
            font-size:18px;
            font-weight:600;
        }
        .row{
            padding-top:16px;
        }
        .how-to-verify-items{
            position: relative;
            border-block: 1px dashed var(--firoozeh);
            padding: 4px 0 4px 32px;
            margin-bottom: 8px;
            &.first{
                border-left: 1px dashed var(--firoozeh);
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            &:after {
                content: "";
                position: absolute;
                right: -29px;
                top: 14px;
                width: 38px;
                height: 1px;
                border-top: 1px dashed var(--firoozeh);
                transform: rotate(55deg);
                
            }
            &:before {
                content: "";
                position: absolute;
                right: -29px;
                bottom: 14px;
                width: 38px;
                height: 1px;
                border-top: 1px dashed var(--firoozeh);
                transform: rotate(-55deg);
            }
            .mask{
                position: absolute;
                inset:0;
                &:after {
                    content: "";
                    position: absolute;
                    left: -8px;
                    top: 14px;
                    width: 35px;
                    height: 1px;
                    border-top: 1px dashed var(--firoozeh);
                    transform: rotate(55deg);
                    
                }
                &:before {
                    content: "";
                    position: absolute;
                    left: -8px;
                    bottom: 14px;
                    width: 35px;
                    height: 1px;
                    border-top: 1px dashed var(--firoozeh);
                    transform: rotate(-55deg);
                }
            }
            .number-step{
                margin-inline:13px;
                border:1px solid white;
                border-radius:50%;
                font-size:14px;
                height:22px;
                width:22px;
                text-align:center;
            }
            .caption-how-to-verify{
                font-size:18px;
            }
        }
    }

`
function HowToVerify() {
    const CaptionName = {
        info:"Basic Info",
        IdCard:"Upload ID Card",
        face:"Face Recognition",
        how:"How to Verify"
    
    };
  return (
    <HowToVerifyBody>
            <div className="how-to-verify-box ">
                <span className="title">{CaptionName.how}</span>
                <div className="row ">
                    <div className="col-lg-4 col-12 pe-4">
                        <div className="how-to-verify-items first d-flex align-items-center justify-content-start">
                            <img src={basic} alt="" width={54} />
                            <span className="number-step">1</span>
                            <span className="caption-how-to-verify">{CaptionName.info}</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 px-4">
                        <div className="how-to-verify-items d-flex align-items-center justify-content-start">
                        <div className="mask"></div>
                            <img src={upload} alt="" width={54} />
                            <span className="number-step">2</span>
                            <span className="caption-how-to-verify">{CaptionName.IdCard}</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ps-4">
                        <div className="how-to-verify-items d-flex align-items-center justify-content-start">
                        <div className="mask"></div>
                            <img src={face} alt="" width={54} />
                            <span className="number-step">3</span>
                            <span className="caption-how-to-verify">{CaptionName.face}</span>
                        </div>
                    </div>
                </div>
            </div>
    </HowToVerifyBody>
  )
}

export default HowToVerify