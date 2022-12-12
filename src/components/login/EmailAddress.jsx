import React, { useMemo } from 'react'
import { TextField, InputAdornment, Stack } from '@mui/material';
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify'
import { authStore } from '../../api/store';
import { CONNECTION_ERROR, LOGIN_SUCCESSFUL, OTP_SUCCESSFUL } from '../../api/messages';
import { useNavigate } from 'react-router-dom';
export default function EmailAddress() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [typing, setTyping] = useState("password");

  const handlePassword = (props) => () => {
    setTyping(props)
  }

  const store = authStore(s => s)
  const [loading, setLoading] = useState(false)

  const disabled = useMemo(() => {
    return !password || !email || password.length < 8 
  }, [email, password])

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation()
    setLoading(true)
    store.generate_token({ email, password })
      .then(({ code, result }) => {
        if (code === 200) {
          toast.success(OTP_SUCCESSFUL)
          navigate("/auth/verify")
        }
        else result.forEach(e => { toast.error(e) });
      })
      .catch(mobileLoginSubmit  => {
        console.log({ mobileLoginSubmit })
        toast.error(CONNECTION_ERROR)
      })
      .finally(f => setLoading(false))

  }
  return (
    <form onSubmit={submit}>
      <Stack direction={"column"} spacing={5} sx={{ mt: 4 }} >
        <TextField label="Email" color="light" fullWidth sx={{ textcolor: "#000", height: '7ch', my: 1 }} required type="email" value={email} onChange={e => setEmail(e.target.value)} />

        <TextField onChange={(e) => setPassword(e.target.value)} label="password" color="light" fullWidth
          sx={{ height: '7ch', my: 1 }} variant="outlined" type={typing}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ py: 0 }}>
                {typing === "password"
                  ? <Visibility sx={{ cursor: "pointer" }} onClick={handlePassword('type')} />
                  : <VisibilityOff sx={{ cursor: "pointer" }} onClick={handlePassword('password')} />}
              </InputAdornment>
            )
          }} />
        <LoadingButton loading={loading} disabled={disabled} type={"submit"}
          variant="contained" fullWidth sx={{ fontWeight: '700', height: '5ch', mt: 1, fontSize: "17px" }} color="light" >Log in</LoadingButton>
      </Stack>
    </form>

  )
}