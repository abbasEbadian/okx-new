import React from 'react'
import Styled from '@emotion/styled'
import { Alert } from '@mui/material';
const CorrectExampleBody = Styled.div`
    .correct-example-box{
        .correct-example-items{
            margin-right:25px;
            .correct-example-img{
                border:1px solid var(--green);
                border-radius:4px;
                min-height:150px;
                min-width:288px;
                margin-right:30px;
                margin-top:16px;
            }
            .text-correct-example{
                color:var(--gray);
                padding-right:30px;
            }
        }
    }
    .text-box{
        margin-block:32px;
        padding-inline:16px;
        padding-block:8px;
        background:#faf2ef;
        border-radius:15px;
        .text-content{
            color:#f5906a;
            font-size:14px;
            margin: 0;
        }
    }
`
function CorrectExample() {
    const CaptionName={
        title:"Correct Example:",
        frontal:"Frontal ID Sample",
        back:"Back ID Sample",
        driver:"Drivers license",
        text:"Please ensure that the ID Certificate and Statement are clearly visible, and texts on which are complete and fully exposed."
    };
    return (
    <CorrectExampleBody>
        <span className="title">{CaptionName.title}</span>
        <div className="correct-example-box d-flex align-items-center justify-content-start">
            <div className="correct-example-items d-flex flex-column">
                <div className="correct-example-img"></div>
                <span className="text-correct-example text-center mt-3">{CaptionName.frontal}</span>
            </div>
            <div className="correct-example-items d-flex flex-column">
                <div className="correct-example-img"></div>
                <span className="text-correct-example text-center mt-3">{CaptionName.back}</span>
            </div>

        </div>

        <Alert severity="warning" className='mt-5'>{CaptionName.text}</Alert>

    </CorrectExampleBody>
  )
}

export default CorrectExample