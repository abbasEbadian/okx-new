import React, { useState } from 'react'
import Styled from '@emotion/styled'
import HeadSecurity from '../components/SubSecurity/HeadSecurity'
import TwoFactorAuthentication from '../components/SubSecurity/TwoFactorAuthentication'
import AdvancedSecurity from '../components/SubSecurity/AdvancedSecurity'
import DevicesActivities from '../components/SubSecurity/DevicesActivities'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SecurityBinanceGoogleAuthenticatorBtn from './SecurityBinanceGoogleAuthenticatorBtn'
import { Button } from '@mui/material'
const ContentSecurityBody = Styled.div`
    flex-basis: auto;
    flex-grow: 1;
    
`
function ContentSecurity() {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  return (
    <ContentSecurityBody>
      <HeadSecurity />
      <TwoFactorAuthentication setOpen={setOpen} />
      <AdvancedSecurity />
      <DevicesActivities />
      <Dialog
        fullScreen={false}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth='lg'
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <SecurityBinanceGoogleAuthenticatorBtn />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus variant='contained'>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </ContentSecurityBody>
  )
}

export default ContentSecurity