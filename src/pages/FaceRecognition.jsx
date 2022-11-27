import React from 'react'
import Styled from '@emotion/styled'
import CircleIcon from '@mui/icons-material/Circle';
import { AddOutlined } from '@mui/icons-material';
import { Alert, Card } from '@mui/material';
const FaceRecognitionBody = Styled.div`
    
   
    .face-recognition-body{
        padding-block:32px;
        padding-inline:52px;
        border-radius:20px 20px 0px 0px;
        
       .text-face-recognition-box{
        .caption-face-recognition{
            font-size:18px;
        }
        .text-face-recognition{
            font-size:15px;
            margin-left:20px;
            font-weight: 600;
        }
        svg{
            transform:scale(0.4);
            
        }
       }
       .correct-example-items{
            margin-right:25px;
            .correct-example-img{
                border:1px solid var(--green);
                border-radius:4px;
                min-height:150px;
                min-width:288px;
                margin-right:30px;
                margin-top:5px;
            }

        }
        .text-correct-example{
        }
        .upload-face-recognition-items{
            border:1px dashed #ddd;
            border-radius:4px;
            min-height:150px;
            min-width:300px;
            cursor:pointer;
            margin-right:30px;
            margin-top:5px;

            .select-file{
                svg{
                    color:#ddd;
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

    }
`
function FaceRecognition() {
    const CaptionName={
        title:"Please upload photo of handholding ID Document and Statement;",
        text1:"Upload a photo of handholding  the front of ID Document",
        text2:"Please write down the date of submission and word DollarEx",
        correct:"Correct Example:",
        upload:"Click to upload:",
        text:"*Please ensure that the ID Certificate and Statement are clearly visible, and texts on which are complete and fully exposed."
    };
    return (
    <FaceRecognitionBody>
        <div className="container">
            <Card className="face-recognition-body d-flex aling-items-start flex-column">
                <div className="text-face-recognition-box d-flex flex-column">
                    <span className="caption-face-recognition">{CaptionName.title}</span>
                    <div className="d-flex align-items-center mt-2">
                        <CircleIcon fontSize='small'/>
                        <span className="text-face-recognition">{CaptionName.text1}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <CircleIcon fontSize='small'/>
                        <span className="text-face-recognition">{CaptionName.text2}</span>
                    </div>
                   
                </div>
                <div className=" d-flex align-items-center justify-content-start mt-5">
                    <div className="d-flex flex-column jutify-content-start">
                    <span className="text-correct-example text-center">{CaptionName.upload}</span>
                        <div className="upload-face-recognition-items d-flex align-items-center justify-content-center">
                            <input id='upload-face' type="file" hidden  />
                            <label htmlFor="upload-face" className='select-file'><AddOutlined/></label>
                        </div>
                    </div>


                    <div className="correct-example-items d-flex flex-column jutify-content-start">
                        <span className="text-correct-example text-center">{CaptionName.correct}</span>
                        <div className="correct-example-img"></div>
                        
                    </div>

                </div>
                <Alert severity="warning" className='mt-5'>{CaptionName.text}</Alert>

            </Card>
        </div>
    </FaceRecognitionBody>
  )
}

export default FaceRecognition