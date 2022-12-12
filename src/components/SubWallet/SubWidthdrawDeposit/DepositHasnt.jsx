import React from 'react'
import Styled from '@emotion/styled'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom'
const DepositHasntBody = Styled.div`
    .learn-more{
        color:var(--white);
        font-size:14px;
        .learn-more-link{
            color:var(--white);
        }
    }
    .content-box{
       .text{
        color:var(--gray);
        font-size:14px;
       } 
       .learn-list-deposit{
        .text-list{
            color:var(--gray);
            font-size:14px;
            position:relative;
            padding-left:10px;
            &:after{
                position:absolute;
                content:" ";
                top:10px;
                left:0;
                background:var(--white);
                height:5px;
                width:5px;
                border-radius:50%;
            }

        }

       }
       .search-learn-deposit{
            color:var(--white);
            font-size:14px;
            border:none;
            background:var(--gray);
            border-radius:15px;
            padding-inline:16px;
            padding-block:5px;
            margin-top:16px;
        }
    }
`
function DepositHasnt() {
  return (
    <DepositHasntBody>
        <div className="deposit-hasnt mt-5">
            <div className="learn-more d-flex align-items-center justify-content-between mb-4">
                <span className="learn-more">Deposit Hasnt arrived?</span>
                <Link className='learn-more-link'>
                    Learn more
                </Link>
            </div>
            <div className="content-box d-flex align-items-start flex-column" >
                <p className="text">
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan 
                </p>
                <div className="learn-list-deposit d-flex align-items-start flex-column">
                    <span className="text-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    <span className="text-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    <span className="text-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    <span className="text-list"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <button className='search-learn-deposit'>search <EastIcon fontSize='Small'/></button>
            </div>
        </div>
    </DepositHasntBody>
  )
}

export default DepositHasnt