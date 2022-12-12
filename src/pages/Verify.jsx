import React, { useState } from 'react'
import { Button, Box, TextField, Container, Typography, InputAdornment, ButtonGroup } from '@mui/material';
import logo from '../assets/logolight.png'
import Header from '../components/Header'
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify'
import { authStore } from '../api/store';
import { CONNECTION_ERROR, OTP_RESENT } from '../api/messages';
import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useMemo } from 'react';
const VerifyPage = styled.div`
  min-height: 100vh;
`
export default function Verify() {
  const store = authStore(s => s)
  const [value, setValue] = React.useState('');
  const [timer, setTimer] = React.useState(20)
  const [loading, setLoading] = React.useState(false)

  const [verifyType, setVerifyType] = React.useState('login')
  const [verifyToken, setVerifyToken] = React.useState('')
  const [verifyMobile, setVerifyMobile] = React.useState('')
  const [verifyEmail, setVerifyEmail] = React.useState('')
  const [verifyPassword, setVerifyPassword] = React.useState('')

  const [resending, setResending] = useState(false)

  useEffect(() => {
    timer > 0 && setTimeout(() => { setTimer(timer - 1) }, 1000)
  }, [timer])

  useEffect(() => {
    // return () => {
    //   localStorage.removeItem('verify_password')
    // }
  }, [])
  const get_data = () => {
    const t = localStorage.getItem('verify_type')
    const t2 = localStorage.getItem('verify_token')
    const t3 = localStorage.getItem('verify_mobile')
    const t4 = localStorage.getItem('verify_email')
    const t5 = localStorage.getItem('verify_password')
    setVerifyType(t)
    setVerifyToken(t2)
    setVerifyMobile(t3)
    setVerifyEmail(t4)
    setVerifyPassword(t5)
  }
  useEffect(() => {
    get_data()
  }, [])

  const verify = () => {
    if (verifyType === 'register') {
      setLoading(true)
      store.verify_register({ code: value, token_id: verifyToken })
        .then(({ error, message }) => {
          toast(message, { type: error ? 'error' : 'success' })
        })
        .finally(f => setLoading(false))
    } else if (verifyType === 'login') {
      setLoading(true)
      store.verify_login({ otp: value, id: verifyToken })
        .then(({ error, message }) => {
          toast(message, { type: error ? 'error' : 'success' })
        })
        .finally(f => setLoading(false))
    }
  }
  const resend = () => {
    if (verifyType === 'register') {
      setResending(true)
      store.resend_otp({ token: verifyToken })
        .then(({ error, token, message }) => {
          if (error === 0) {
            toast.success(OTP_RESENT)

            get_data()
            setTimer(1)
          } else {
            toast.error(message)
          }
        })
        .catch(verifyResendRegister => {
          console.log({ verifyResendRegister })
          toast.error(CONNECTION_ERROR)
        })
        .finally(f => setResending(false))
    }

    else if (verifyType === 'login') {
      setResending(true)
      let d = {email:verifyEmail, password:verifyPassword}
      if(verifyType === 'mobile')
        d = {mobile:verifyMobile, password:verifyPassword}
      store.generate_token(d)
        .then(({ code, token, result }) => {
          if (code === 200) {
            toast.success(OTP_RESENT)

            get_data()
            setTimer(60)
          } else {
            toast.error(result[0])
          }
        })
        .catch(verifyResendRegister => {
          console.log({ verifyResendRegister })
          toast.error(CONNECTION_ERROR)
        })
        .finally(f => setResending(false))
    }

  }
  const [verifySource, digitsCount] = useMemo(() => {
    return verifyMobile ? ['mobile', 6] : ['email', 6]
  }, [verifyEmail, verifyMobile])

  return (
    <VerifyPage>

      <div className="d-flex justify-content-center align-items-center card-container pt-2">
        <Container maxWidth="sm" className="register-container">
          <Box variant="outlined" className='col-12'>
            <Box className="d-flex justify-content-start align-items-center">
              <Typography variant="h4" sx={{ mb: 4, ml: 3, fontWeight: "bold", display: "flex", alignItems: "center" }}>
                Welcome in to
                <Box
                  component="img"
                  src={logo}
                  sx={{ height: "45px" }}
                />
              </Typography>
            </Box>
            <Box sx={{ px: 2 }}>
              <Typography sx={{ my: 2 }} component={'div'} className='d-flex justify-content-between align-items-center' >
                <div>Enter the code sent to <span className='text-success'>{verifySource === 'mobile' ? verifyMobile : verifyEmail}</span>:</div>
                <Link to={verifyType === 'login'? '/auth/login': '/auth/signup'} >
                  <Button variant='outlined' size='small' color='light'>
                    <ModeEditIcon fontSize='small' />
                  </Button>
                </Link>
              </Typography>
              <TextField value={value} onChange={(e) => { if (e.target.value.length > digitsCount) return; setValue(e.target.value) }} label={`${digitsCount}-digit code`} color="light" fullWidth
                sx={{ height: '7ch', my: 1 }} variant="outlined" type={'tel'}
                InputProps={{
                  type: 'tel',
                  endAdornment: (
                    <InputAdornment position="end" sx={{ py: 0 }}>
                      <SettingsCellIcon />
                    </InputAdornment>
                  )
                }} />
              <LoadingButton color={"light"} loading={resending}
                onClick={resend} variant={'outlined'} disabled={timer !== 0}>Resend </LoadingButton> <span className='ms-2'>{String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}</span>
              <LoadingButton type={'submit'} disabled={value.length !== digitsCount} loading={loading} variant="contained" fullWidth
                onClick={verify}
                sx={{ fontWeight: '700', height: '5ch', mt: 2, fontSize: "17px" }} color="light" >Verify</LoadingButton>
            </Box>
          </Box>
        </Container>
      </div>
    </VerifyPage>
  )
}
