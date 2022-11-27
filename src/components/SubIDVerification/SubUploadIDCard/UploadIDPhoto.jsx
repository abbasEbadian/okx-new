import React from 'react'
import Styled from '@emotion/styled'
import { AddOutlined } from '@mui/icons-material';
const UploadIDPhotoBody = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    .upload-id-photo-box{
        .upload-id-photo-items{
            border:1px dashed #ddd;
            border-radius:4px;
            min-height:150px;
            min-width:300px;
            margin-right:30px;
            margin-top:16px;
            cursor:pointer;

            .select-file{
                svg{
                    color:#ddd;
                }
            }
        }
    }
`
function UploadIDPhoto() {
    const CaptionName={
        title:"UpLoad ID Photo:",
        idcard:"ID Card",
        passport:"Passport",
        driver:"Drivers license"
    };
    return (
    <UploadIDPhotoBody>
        <span className="title">{CaptionName.title}</span>
        <div className="upload-id-photo-box d-flex align-items-center justify-content-start">
            <div className="upload-id-photo-items d-flex align-items-center justify-content-center">
                <input id='upload-id-card' type="file" hidden  />
                <label htmlFor="upload-id-card" className='select-file'><AddOutlined/></label>
            </div>
            <div className="upload-id-photo-items d-flex align-items-center justify-content-center">
                <input id='upload-id-card' type="file" hidden  />
                <label htmlFor="upload-id-card" className='select-file'><AddOutlined/></label>
            </div>
        </div>
    </UploadIDPhotoBody>
  )
}

export default UploadIDPhoto