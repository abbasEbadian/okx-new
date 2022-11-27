import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Styled from '@emotion/styled'
const UserInfoBody = Styled.div`
  padding-inline:32px;
  padding-block:16px;
  background:var(--body-color);
  .info-user-body{
    width:100%;
    .info-user-name-box{
        .user-name-id{
          color:var(--white);
          font-size:18px;
        }
        .edit-user-name-id{
          background:transparent;
          border:none;
          color:var(--gray800);
          margin-inline:10px;
        }
    }
    .info-user-id-box{
      margin-top:16px;
      .info-user-id-content{
        margin-right:20px;
        .title-info-user-id{
          color:var(--gray);
          font-size:11px;
          font-weight:700;
        }
        svg{
          color:var(--gray);
          
        }
        .value-info-user-id{
          color:var(--white200);
          font-size:14px;
          font-weight:600;
          
        }
      }
    }
  }
`
const Profilebody = Styled.div`
  width:90px;
  height:80px;
  background:var(--white300);
  border-radius:50%;
  margin-inline:15px;
`
function UserInfoDashboard() {
  const CaptionName = {
    username: "Anonymous-User-15db8",
    userid: "User ID",
    usertype: "User Type",
    twitter: "Twitter",
    referral: "Referral",
    timelogin: "Last login time",
    id:"152462",
    regular: "Regular User",
    twitterlink: "not linked",
    timelogininfo:"2022-10-10 12:56:39(86.105.252.183)"
  };
  return (
    <UserInfoBody>
        <div className="user-info-items d-flex align-items-center">
            <Profilebody >
             
            </Profilebody>
            <div className="info-user-body d-flex flex-column align-items-start">
              <div className="info-user-name-box d-flex align-items-center">
                  <span className="user-name-id">{CaptionName.username}</span>
                  <button className="edit-user-name-id"><BorderColorIcon fontSize='small'/></button>
              </div>
              <div className="info-user-id-box d-flex align-items-center justify-content-start">
                <div className="info-user-id-content d-flex flex-column">
                  <span className="title-info-user-id ">{CaptionName.userid}</span>
                  <span className="value-info-user-id">{CaptionName.id}</span>
                </div>
                <div className="info-user-id-content">
                  <div className="title-info-user-id-box">
                    <span className="title-info-user-id">{CaptionName.usertype}</span>
                    <ChevronRightIcon fontSize='small'/>
                  </div>
                  <span className="value-info-user-id">{CaptionName.regular}</span>
                </div>
                <div className="info-user-id-content">
                  <div className="title-info-user-id-box">
                    <span className="title-info-user-id">{CaptionName.twitter}</span>
                      <ChevronRightIcon fontSize='small'/>
                  </div>
                  <span className="value-info-user-id">{CaptionName.twitterlink}</span>
                </div>
                <div className="info-user-id-content">
                  <div className="title-info-user-id-box">
                    <span className="title-info-user-id">{CaptionName.timelogin}</span>
                      <ChevronRightIcon fontSize='small'/>
                  </div>
                  <span className="value-info-user-id">{CaptionName.timelogininfo}</span>
                </div>
              </div>
            </div>

        </div>
    </UserInfoBody>
  )
}

export default UserInfoDashboard