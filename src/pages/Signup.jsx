import * as React from 'react';
import { Container, Button, Typography, Box, ButtonGroup } from '@mui/material';
import MobileNumber from '../components/register/MobileNumber'
import EmailAddress from '../components/register/EmailAddress';
import { Link } from 'react-router-dom'
import Header from '../components/Header';

// import registers from '../../assets/registers.png'

export default function FullWidthTabs() {

  const [value, setValue] = React.useState(0);




  return (
    <>
      
      <div className="d-flex justify-content-center align-items-center card-container pt-2">
        <Container  maxWidth="sm" className="register-container">
          <Box variant="outlined" className='col-12 mx-auto'>
            <Box>
              <Box className="d-flex justify-content-start align-items-start">
                <Typography variant="h4" sx={{ mb: 4, ml: 3, fontWeight: "bold" }}>Create account</Typography>
              </Box>
              <Box sx={{ px: 2 }}>
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  fullWidth
                >
                  <Button color="grey" variant={value === 0 ? "contained" : "outlined"} onClick={() => setValue(0)} sx={{ py: 1.5 }}> Mobile</Button>
                  <Button color="grey" variant={value === 1 ? "contained" : "outlined"} onClick={() => setValue(1)} sx={{ py: 1.5 }}>Email</Button>

                </ButtonGroup>
                <Box sx={{ py: 3 }}>
                  {value === 0 && <MobileNumber />}
                  {value === 1 && <EmailAddress />}
                </Box>
                <Box className="d-flex justify-content-center align-items-center">
                  <Typography variant="p" color="gray" component="div">Already Have Account?  <Link to="/auth/login" className='text-white'>log in</Link></Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
    </>



  );
}

