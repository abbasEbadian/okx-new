import React, { useMemo } from 'react'
import { TextField, Button, Card, Container, AppBar, Tabs, Tab, Typography, Checkbox, Box, FormGroup, FormControlLabel, InputAdornment } from '@mui/material';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState, useEffect } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import { QrCode, Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { authStore } from '../../api/store';
import LoadingButton from '@mui/lab/LoadingButton';
import { Stack } from '@mui/system';
import { toast } from 'react-toastify'
import { CONNECTION_ERROR, REGISTER_OK } from '../../api/messages';
import { useNavigate } from 'react-router-dom';
export default function MobileNumber() {
    const navigate = useNavigate();
    const [password, setPassword] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    const [refCode, setRefCode] = React.useState("")

    const [type, setType] = useState("password");
    const handlePassword = (props) => () => {
        setType(props)
    }

    const store = authStore(s => s)
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const disabled = useMemo(() => {
        return !checked || !password || !mobile || password.length < 8 || mobile.length != 13
    }, [mobile, password, checked])

    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation()
        const _mobile = mobile.replace("+98", "0")
        setLoading(true)
        store.register({ mobile: _mobile, password, ref_code: refCode })
            .then(({ error, message = null, token = null }) => {
                if (error === 1)
                    toast.error(message)
                else {
                    toast.success(REGISTER_OK)
                    navigate('/auth/verify')
                }
            })
            .catch(mobileRegister => {
                console.log({ mobileRegister })
                toast.error(CONNECTION_ERROR)
            })
            .finally(f => setLoading(false))

    }
    return (

        <form onSubmit={submit}>
            <Stack direction={'column'} spacing={3} color="whtie"  >
                <Box>
                    <PhoneInput
                        international
                        defaultCountry="IR"
                        value={mobile}
                        onChange={setMobile}
                        className="inputNumber"
                    />
                </Box>
                <Box>

                    <TextField onChange={(e) => setPassword(e.target.value)} label="password" color="light" fullWidth
                        sx={{ height: '7ch', my: 1 }} variant="outlined" type={type}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" sx={{ py: 0 }}>
                                    {type === "password"
                                        ? <Visibility sx={{ cursor: "pointer" }} onClick={handlePassword('text')} />
                                        : <VisibilityOff sx={{ cursor: "pointer" }} onClick={handlePassword('password')} />}
                                </InputAdornment>
                            )
                        }} />
                    <PasswordStrengthBar password={password} />
                </Box>

            </Stack>
            <TextField value={refCode} onChange={(e) => setRefCode(e.target.value)}
                label="Referral code (optional)" color="light" fullWidth sx={{ textcolor: "#000", height: '7ch', my: 2 }} variant="outlined" type="text" />
            <FormGroup>
                <FormControlLabel control={<Checkbox sx={{ mb: 3 }} color="light" checked={checked} onChange={e => setChecked(e.target.checked)} />}
                    label="I have read and agree to BitMNC Terms of Service and Privacy Policy" sx={{ size: '20hv' }} inputprops={{
                        style: { dir: "rtl" }
                    }} />
            </FormGroup>

            <LoadingButton type={'submit'} disabled={disabled} loading={loading} variant="contained" fullWidth sx={{ fontWeight: '700', height: '5ch', mt: 1, fontSize: "17px" }} color="light" >Sign up</LoadingButton>
        </form>
    )
}
