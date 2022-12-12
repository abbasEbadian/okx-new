import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AccountActivitiyRecords from './AccountActivitiyRecords'
import Dashboard from './Dashboard'
import DeviceManagement from './DeviceManagement'
import EnablePhoneNumberVerification from './EnablePhoneNumberVerification'
import Home from './Home'
import IDVerification from './IDVerification'
import Login from './Login'
import Market from './Market'
import Order from './Order'
import Trade from './Trade'
import PersonalVerification from './PersonalVerification'
import Signup from './Signup'
import Wallet from './Wallet'
import { authStore } from '../api/store'
import Verify from './Verify'
import DepositCrypto from './DepositCrypto'
import WithdrawCrypto from './WithdrawCrypto'

function Router() {
  // const store = {authenticated: true}
  const store = authStore(s => s)
  return (<>
        { !store.loading?
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth/login' element={store.authenticated?<Navigate replace to="/" />:<Login />}/>
          <Route path='/auth/signup' element={store.authenticated?<Navigate replace to="/" />:<Signup />}/>
          <Route path='/auth/verify' element={store.authenticated?<Navigate replace to="/" />:<Verify />}/>
          <Route path='/market' element={!store.authenticated?<Navigate replace to="/" />:<Market />}/>
          <Route path='/trade' element={!store.authenticated?<Navigate replace to="/" />:<Trade/>}/>
          <Route path='/orders' element={!store.authenticated?<Navigate replace to="/" />:<Order />}/>
          <Route path='/wallet' element={!store.authenticated?<Navigate replace to="/" />:<Wallet />}/>
          <Route path='/wallet/deposit' element={!store.authenticated?<Navigate replace to="/" />:<DepositCrypto />}/>
          <Route path='/wallet/withdraw' element={!store.authenticated?<Navigate replace to="/" />:<WithdrawCrypto />}/>
          <Route path='/dashboard' element={!store.authenticated?<Navigate replace to="/" />:<Dashboard />}/>
          <Route path='/dashboard/security' element={!store.authenticated?<Navigate replace to="/" />:<Dashboard />}/>
          <Route path='/dashboard/security/enable-phone' element={!store.authenticated?<Navigate replace to="/" />:<EnablePhoneNumberVerification/>}/>
          <Route path='/dashboard/security/activity-records' element={!store.authenticated?<Navigate replace to="/" />:<AccountActivitiyRecords />}/>
          <Route path='/dashboard/security/device-management' element={!store.authenticated?<Navigate replace to="/" />:<DeviceManagement />}/>
          <Route path='/personal-verification' element={!store.authenticated?<Navigate replace to="/" />:<PersonalVerification />}/>
          <Route path='/id-verification' element={!store.authenticated?<Navigate replace to="/" />:<IDVerification />}/>
      </Routes>: <span>Loading</span>
        }
        
        </>
  )
}

export default Router