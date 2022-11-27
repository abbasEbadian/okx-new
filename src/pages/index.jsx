import React from 'react'
import {Routes, Route} from 'react-router-dom'
import UplaodIDCard from '../components/SubIDVerification/SubBasicInfo/UplaodIDCard'
import AccountActivitiyRecords from './AccountActivitiyRecords'
import BasicInfo from './BasicInfo'
import ContentSecurity from './ContentSecurity'
import Dashboard from './Dashboard'
import DeviceManagement from './DeviceManagement'
import EnablePhoneNumberVerification from './EnablePhoneNumberVerification'
import FaceRecognition from './FaceRecognition'
import Home from './Home'
import IDVerification from './IDVerification'
import Login from './Login'
import Market from './Market'
import Order from './Order'
import Trade from './Trade'
import PersonalVerification from './PersonalVerification'
import PersonalVerificationFinal from './PersonalVerificationFinal'
import SecurityBinanceGoogleAuthenticatorBtn from './SecurityBinanceGoogleAuthenticatorBtn'
import Signup from './Signup'
import Wallet from './Wallet'

function Router() {
  return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/auth/login' element={<Login />}/>
            <Route path='/auth/signup' element={<Signup />}/>
            <Route path='/market' element={<Market />}/>
            <Route path='/trade' element={<Trade/>}/>
            <Route path='/orders' element={<Order />}/>
            <Route path='/wallet' element={<Wallet />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/dashboard/security' element={<Dashboard />}/>
            <Route path='/dashboard/security/enable-phone' element={<EnablePhoneNumberVerification/>}/>
            <Route path='/dashboard/security/activity-records' element={<AccountActivitiyRecords />}/>
            <Route path='/dashboard/security/device-management' element={<DeviceManagement />}/>
            <Route path='/personal-verification' element={<PersonalVerification />}/>
            <Route path='/id-verification' element={<IDVerification />}/>
   
        </Routes>
  )
}

export default Router