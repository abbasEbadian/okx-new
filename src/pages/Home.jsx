import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import LandHead from '../components/SubLanding/LandHead';
import LandDetail from '../components/SubLanding/LandDetail';
import CurrencyList from '../components/SubLanding/CurrencyList';
import LandFooter from '../components/SubLanding/LandFooter';
import Services from '../components/SubLanding/Services';
import TrideAny from '../components/SubLanding/TrideAny';
import Textinfo from '../components/SubLanding/TextInfo';
import Header from '../components/Header';
export default function Landing() {
    return (
        <>
        <Header/>
            <Box className="container-fluid" >
                <LandHead />
            </Box>
            <Box sx={{ paddingInline: "8%"}}>
                <LandDetail />
                <CurrencyList />
                <TrideAny />
                <Services />
                <Textinfo />
            </Box>
            <Box sx={{ paddingInline: "8%", backgroundColor: "#161515" }}>
                <LandFooter />
            </Box>
        </>
    )
}

