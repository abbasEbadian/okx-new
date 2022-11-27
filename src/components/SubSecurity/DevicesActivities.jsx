import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import AccountActivitiyRecords from '../../pages/AccountActivitiyRecords';
import { Button } from '@mui/material';
const DevicesActivitiesBody = Styled.div`
 padding-inline:100px;
    margin-top:32px;
    .title-device-activities{
        color:var(--white);
        font-size:24px;
        margin-bottom:15px;
    }
    .device-activities-contnet{
    padding-block:16px;
    border-bottom:1px solid #555;
  }
  .text-device-activities-box{
    .caption-device-activities{
      color:var(--white);
      font-size:15px;
      margin-bottom:10px;
    }
    .guide-device-activities{
      color:var(--gray);
      font-size:13px;
    }

    }
    .change-remove-link{
        background:var(--gray800);
        color:var(--white300);
        text-decoration:none;
        border-radius:5px;
        min-width:80px;
        text-align:center;
        font-size:14px;
        }
`
function DevicesActivities() {
    const CaptionName={
        title:"Devices and Activities",
        device:"Device Management",
        manager:"Manage",
        guide1:"Manager devices allowed to access your account.",
      
    };
    return (
    <DevicesActivitiesBody>
        <div className="container d-flex flex-column">
            <span className="title-device-activities">{CaptionName.title}</span>
            <div className="device-activities-contnet">
                <div className="row">
                    <div className=" col-12">
                        <div className="device-activities-items d-flex align-items-end">
                            <div className="img-box"></div>
                            <div className="text-device-activities-box d-flex flex-column align-items-start">
                                <span className="caption-device-activities">{CaptionName.device}</span>
                                <span className="guide-device-activities">{CaptionName.guide1}</span>
                            </div>

                            <Link to="/dashboard/security/device-management" className='change-remove-link ms-auto'>
                                <Button >{CaptionName.manager}</Button>
                            </Link>
                        </div>
                    </div>
                            

                    <div className=" col-12 mt-4">
                        <div className="device-activities-items d-flex align-items-end">
                            <div className="img-box"></div>
                            <div className="text-device-activities-box d-flex flex-column align-items-start">
                            <span className="caption-device-activities">Activity Records</span>
                            <span className="guide-device-activities">Manage acivity records</span>
                            </div>

                            <Link to="/dashboard/security/activity-records" className='change-remove-link ms-auto'>
                                <Button >{CaptionName.manager}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </DevicesActivitiesBody>
  )
}

export default DevicesActivities