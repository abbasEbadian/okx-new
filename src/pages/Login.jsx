import React, { useState } from 'react'
import { Button, Box, TextField, Container, Typography, InputAdornment, ButtonGroup } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom'
import { QrCode, Visibility, VisibilityOff } from '@mui/icons-material';
import qrcode from '../assets/qrcode.png';
import MobileNumber from '../components/login/MobileNumber';
import EmailAddress from '../components/login/EmailAddress';
import logo from '../assets/logolight.png'
import Header from '../components/Header'
export default function Login() {
  const [value, setValue] = React.useState(0);

  const [password,setPassword] = useState("")
  const [mobile,setMobile] = useState("")


  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center card-container pt-2">
        <Container  maxWidth="sm" className="register-container">
          <Box variant="outlined" className='col-12'>
            <Box className="d-flex justify-content-start align-items-center">
              <Typography variant="h4" sx={{ mb: 4, ml: 3, fontWeight: "bold", display: "flex", alignItems: "center" }}>Welcome in to
                <Box
                  component="img"
                  src={logo}
                  sx={{ height: "45px" }}
                />
              </Typography>
            </Box>
            <Box sx={{ px: 2 }}>
              <ButtonGroup  
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                fullWidth
              >
                <Button color="grey" variant={value === 0?"contained":"outlined"} onClick={() => setValue(0)} sx={{py: 1.5}}> Mobile</Button>
                <Button color="grey" variant={value === 1?"contained":"outlined"} onClick={() => setValue(1)} sx={{py: 1.5}}>Email</Button>

              </ButtonGroup>
              <Box sx={{ py: 3 }}>
                {value === 0 && <MobileNumber password={password} setPassword={setPassword} mobile={mobile} setMobile={setMobile} />}
                {value === 1 && <EmailAddress />}
              </Box>
              <Box className="d-flex justify-content-center align-items-center">
                <Typography variant="p" color="gray" component="div">Already Have Account? <Link to="/auth/signup" className='text-white'>sign up</Link></Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>

  )
}
