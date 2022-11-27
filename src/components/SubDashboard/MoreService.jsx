import React from 'react'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import Styled from '@emotion/styled'

const MoreServiceBody = Styled.div`
    display:flex;
    flex-direction:column;
    margin-top:48px;
    .title-service{
        color:var(--white);
        font-weight:600;
        font-size:18px;
        margin-bottom:16px;
    }
    .more-service-items{
        border:1px solid #555;
        border-radius:5px;
        margin-bottom:10px;
        padding-inline:10px;
        /* padding-block:5px; */
        .img-seevice-box{
            color:var(--white);
        }
        .more-sercive-content{
            margin-inline:15px;
            .caption-more-service{
                font-size:14px;
                color:var(--white);
            }
            .text-more-service{
                font-size:12px;
                color:var(--gray);
            }
        }
    }
`
   
function MoreService() {
    const CaptionName = {
        moreservice:"More Service",
        learn: "Learn and Earn",
        referral:"Referral",
        openorder:"Open Order",
        wallet:"Wallet Direct",
        learntext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        referraltext:"RLorem ipsum dolor sit amet, consectetur adipiscing elit",
        openordertext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        wallettext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    };
    return (
        <MoreServiceBody>
            <span className="title-service">{CaptionName.moreservice}</span>
            <div className="more-service-items d-flex align-items-center">
                <div className="img-seevice-box"><DisplaySettingsIcon fontSize='small'/></div>
                <div className="more-sercive-content d-flex flex-column align-items-start">
                    <span className="caption-more-service">{CaptionName.learn}</span>
                    <p className="text-more-service">{CaptionName.learntext}</p>
                </div>
            </div>
            <div className="more-service-items d-flex align-items-center">
                <div className="img-seevice-box"><DisplaySettingsIcon fontSize='small'/></div>
                <div className="more-sercive-content d-flex flex-column align-items-start">
                    <span className="caption-more-service">{CaptionName.referral}</span>
                    <p className="text-more-service">{CaptionName.referraltext}</p>
                </div>
            </div>
            <div className="more-service-items d-flex align-items-center">
                <div className="img-seevice-box"><DisplaySettingsIcon fontSize='small'/></div>
                <div className="more-sercive-content d-flex flex-column align-items-start">
                    <span className="caption-more-service">{CaptionName.openorder}</span>
                    <p className="text-more-service">{CaptionName.openordertext}</p>
                </div>
            </div>
            <div className="more-service-items d-flex align-items-center">
                <div className="img-seevice-box"><DisplaySettingsIcon fontSize='small'/></div>
                <div className="more-sercive-content d-flex flex-column align-items-start">
                    <span className="caption-more-service">{CaptionName.wallet}</span>
                    <p className="text-more-service">{CaptionName.wallettext}</p>
                </div>
            </div>

        </MoreServiceBody>
    )
}

export default MoreService