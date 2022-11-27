import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from '@emotion/styled';
const Password = styled.div`
    position: relative;
    .icon{
        position: absolute;
        right: 8px;
        top: 8px;
    }
`
function PasswordInput( { value, setValue }) {
    const [visible, setVisible] = useState(false)
    const toggleEye = () => setVisible(!visible)
  return (
    <Password className='password-input'>
        {visible? <VisibilityIcon  className='icon' onClick={toggleEye}/> : <VisibilityOffIcon onClick={toggleEye} className='icon'/>}
        <input type={visible? "text": 'password'} className="form-control" value={value} onChange={ e=> setValue(e.target.value)}/>
    </Password>
  )
}

export default PasswordInput