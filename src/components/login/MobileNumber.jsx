import React from 'react'
import { TextField, InputAdornment, Stack } from '@mui/material';
import { useState } from 'react'
import {  Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useMemo } from 'react';
import { authStore } from '../../api/store';
import {toast} from 'react-toastify'
import LoadingButton from '@mui/lab/LoadingButton';
import { OTP_SUCCESSFUL } from '../../api/messages';
import { useNavigate } from 'react-router-dom';

export default function MobileNumber({ password, setPassword, mobile, setMobile }) {

    const navigate = useNavigate()
    const store = authStore(s => s)
    const [type, setType] = useState("password");
    const [loading, setLoading] = useState(false)
    const disabled = useMemo(() => {
        return !password || !mobile || password.length < 8 || mobile.length != 13
    }, [mobile, password])

    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation()
        const _mobile = mobile.replace("+98", "0")
        setLoading(true)
        store.generate_token({mobile:_mobile, password})
        .then(({code, result}) => {
            if (code === 200) {
                toast.success(OTP_SUCCESSFUL)
                navigate("/auth/verify")
              }
            else result.forEach(e => {toast.error(e)});
        })
        .catch(mobileLoginSubmit=> {
            console.log({mobileLoginSubmit})
            toast.error(CONNECTION_ERROR)
        })
        .finally(f => setLoading(false))

    }
    return (
        <div>
            <form onSubmit={submit} action="#">
                <Stack direction={"column"} spacing={5} sx={{ mt: 4 }} >

                    <PhoneInput
                        international
                        defaultCountry="IR"
                        value={mobile}
                        onChange={setMobile}
                        className="inputNumber"
                    />

                    <TextField onChange={(e) => setPassword(e.target.value)} label="password" color="light" fullWidth value={password}

                        sx={{ height: '7ch', my: 1 }} variant="outlined" type={type}
                        InputProps={{

                            endAdornment: (
                                <InputAdornment position="end" sx={{ py: 0 }}>
                                    {type === "password"
                                        ? <Visibility sx={{ cursor: "pointer" }} onClick={e => setType('text')} />
                                        : <VisibilityOff sx={{ cursor: "pointer" }} onClick={e => setType('password')} />}
                                </InputAdornment>
                            )
                        }} />
                    <LoadingButton loading={loading} type="submit" variant="contained" fullWidth sx={{ fontWeight: '700', height: '5ch', mt: 1, fontSize: "17px" }} color="light" disabled={disabled} >Log in</LoadingButton>
                </Stack>
            </form>
        </div>
    )
}
