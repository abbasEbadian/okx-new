import * as React from 'react';
import Styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const ReturnBtnBody = Styled.div`
    display:flex;
    align-items:center;
    color:var(--gray);
    font-size:15px;
    padding-block:15px;
    
`
function ReturnBtn() {
  return (
    <>
        <ReturnBtnBody>
            <KeyboardArrowLeftIcon fontSize='small'/>
            <Link to="/dashboard/security" className="title-return">Secutity</Link>
        </ReturnBtnBody>
    </>

  )
}

export default ReturnBtn