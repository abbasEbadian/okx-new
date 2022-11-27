import React from 'react'
import Styled from '@emotion/styled'
import ReturnBtn from '../components/ReturnBtn'
import NewPhoneNumberVrification from '../components/SubSecurity/NewPhoneNumberVrification';
const EnablePhoneNumberVerificationBody = Styled.div`
    .head-caption-box{
        .head-caption{
            color:var(--white200);
            font-size:28px;
        }
    }
`
function EnablePhoneNumberVerification() {
    const CaptionName={
        title:"Enable phone Number Verification",
        title2:"New Phone Number Verification",
        passport:"Passport",
        driver:"Drivers license"
    };
    return (
    <>
        <EnablePhoneNumberVerificationBody>
            <div className="container">
                <ReturnBtn/>
                <div className="head-caption-box d-flex  justify-content-center mb-3">
                    <span className="head-caption">{CaptionName.title}</span>
                </div>
                <NewPhoneNumberVrification/>
            </div>
        </EnablePhoneNumberVerificationBody>
    </>

  )
}

export default EnablePhoneNumberVerification