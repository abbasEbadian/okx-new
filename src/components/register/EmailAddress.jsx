import React, { useMemo } from 'react'
import { TextField, Button, Card, Container, AppBar, Tabs, Tab, Typography, Checkbox, Box, FormGroup, FormControlLabel, Link, InputAdornment } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState, useEffect } from 'react'
import {toast} from 'react-toastify'

import { QrCode, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../api/store';
import { CONNECTION_ERROR, REGISTER_OK } from '../../api/messages';

function isValidEmail(email) {
  return /\S+@\S+\.[\S+]{3,}/.test(email);
}

export default function EmailAddress() {
  const navigate = useNavigate();
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [refCode, setRefCode] = React.useState("")

    const [type, setType] = useState("password");
    const handlePassword = (props) => () => {
        setType(props)
    }

    const store = authStore(s => s)
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const disabled = useMemo(() => {
        return !checked || !password || !email || password.length < 8 
    }, [email, password, checked])
    const isEmailValid = useMemo(() => {
      if(!email) return true
      return isValidEmail(email)
    }, [email])

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation()
    setLoading(true)
    store.register({ email, password, ref_code: refCode })
      .then(({ error, message = null}) => {
        if (error === 1)
          toast.error(message)
        else {
          toast.success(REGISTER_OK)
          navigate('/auth/verify')
        }
      })
      .catch(EmailRegister => {
        console.log({ EmailRegister })
        toast.error(CONNECTION_ERROR)
      })
      .finally(f => setLoading(false))

  }
  return (
    <form onSubmit={submit}>
      <Box color="whtie">
        <TextField  error={!isEmailValid} helperText={!isEmailValid && "Incorrect email format"}
        label="Email" color="light" fullWidth sx={{ height: '7ch', my: 3 }} type="email" value={email} onChange={e => setEmail(e.target.value)} />

        <TextField onChange={(e) => setPassword(e.target.value)} label="password" color="light" fullWidth
          sx={{ height: '7ch', my: 1 }} variant="outlined" type={type}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ py: 0 }}>
                {type === "password"
                  ? <Visibility sx={{ cursor: "pointer" }} onClick={handlePassword('type')} />
                  : <VisibilityOff sx={{ cursor: "pointer" }} onClick={handlePassword('password')} />}
              </InputAdornment>
            )
          }} />
        <PasswordStrengthBar password={password} />
      </Box>
      <TextField label="Referral code (optional)" color="light" fullWidth sx={{ height: '7ch', my: 2 }}
        variant="outlined" type="text"
      />
      <FormGroup>
        <FormControlLabel control={<Checkbox sx={{ mb: 3, fontSize: "10px" }} color="light" checked={checked} onChange={e => setChecked(e.target.checked)}/>}
          label="I have read and agree to BitMNC Terms of Service and Privacy Policy"
          sx={{ fontSize: 10 }} inputprops={{
            style: { dir: "rtl" }
          }} />
      </FormGroup>

      <LoadingButton type={"submit"} loading={loading} disabled={disabled} variant="contained" fullWidth sx={{ fontWeight: '700', height: '5ch', mt: 1, fontSize: "17px" }} color="light" >Sign up</LoadingButton>
    </form>

  )
}