import React from 'react'
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const HeaderPersonalVerificationBody = Styled.div`
  background:var(--body-color);
  padding-block:16px ;
  
  .personal-verification-head{
      svg{
        color:var(--white);
      }
      .re-link{
        color:var(--gray);
        display: flex;
        align-items:center;
      }
      .title-personal-verification{
        font-size:30px;
        color:var(--white);
        font-weight:600;
        margin-left:10px;
      }
  }
  .enterprice-personal-verification-box{
    .enterpricepersonal-verification-link{
      color:var(--white);
      text-decoration:none;
      border:1px solid var(--white);
      border-radius:15px;
      padding-inline:10px;
      padding-block:5px;
    }
  }
`
function HeaderPersonalVerification() {

  return (
    <HeaderPersonalVerificationBody>
        <div className="personal-verification-body d-flex align-items-center justify-content-between">
          <div className="personal-verification-head d-flex align-items-center">
            <Link className='re-link ' to="/dashboard/security">
              <KeyboardArrowLeftIcon/> <RecentActorsIcon fontSize='large'/>
              <span className="title-personal-verification">Personal Verification</span></Link>
            

          </div>
          <div className="enterprice-personal-verification-box">
            <Link className='enterpricepersonal-verification-link'>Enter Priceverification</Link>
          </div>
        </div>

    </HeaderPersonalVerificationBody>
  )
}

export default HeaderPersonalVerification