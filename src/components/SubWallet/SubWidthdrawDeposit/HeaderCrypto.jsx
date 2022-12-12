import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import EastIcon from '@mui/icons-material/East';
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
const HeaderCryptoBody = Styled.div`
  padding-block:32px;
  .return-box{
    
    *{
      color:var(--white200);
      text-decoration:none;
    }
  }
  .btn-fiat-box{
    .btn-fiat{
      background:var(--gray);
      border:none;
      border-radius:4px;
      font-size:14px;
      padding-block:8px;
      padding-inline:10px;
    }
  }

`
function HeaderCrypto() {
  return (
    
    <HeaderCryptoBody>
      <div className="header-items d-flex align-items-center justify-content-between">
        <div className="return-box d-flex align-items-center">
          <Link>
            <h4 className=" mx-2"><KeyboardArrowLeftIcon fontSize=''/> Widthdraw Crypto</h4>
          </Link>
        </div>
        <div className="btn-fiat-box d-flex align-items-center">
          <button className='btn-fiat d-flex align-items-center  '>
             Widthdraw Fiat
             <EastIcon fontSize='small' className='ms-2'/>

          </button>
        </div>
      </div>
    </HeaderCryptoBody>
  )
}

export default HeaderCrypto