import React from 'react'
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Agree from '../img/undraw_agree.svg';
import Styled from '@emotion/styled'
import { Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';

const PersonalVerificationFinalBody = Styled.div`
    padding-top:48px;
    .title-box{
        margin-block:16px;
        svg{
            color:var(--green);
        }
        .title-personal-verification{
     
        font-size:24px;
    }
    }

    .personl-verification-final-body{

        padding-block:32px;
        padding-inline:52px;
        border-radius:20px 20px 0px 0px;
        img{
       
            width:300px;

        }
        .text{
            font-size:16px;
            margin-top:32px;
        }
        .btn-back{
            background:transparent;
            border:1px solid var(--green);
            color:var(--gray);
            padding-inline:50px;
            padding-block:16px;
            border-radius:15px;
        }
    }
`
function PersonalVerificationFinal() {
  return (
    <PersonalVerificationFinalBody>
        <Card className="container d-flex flex-column align-items-center justify-content-center">
            <div className="title-box d-flex align-items-center ">
                <RecentActorsIcon fontSize='large'/>
                <span className="title-personal-verification">Personal Verification</span>
            </div>
            <div className="personl-verification-final-body d-flex flex-column align-items-center justify-content-center">
                <img src={Agree} alt="" />
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                </p>
                <Link to="/dashboard"><Button variant='outlined' className="btn-back">Dashboard</Button></Link>
            </div>
        </Card>
    </PersonalVerificationFinalBody>
  )
}

export default PersonalVerificationFinal