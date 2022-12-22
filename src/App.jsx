import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { authStore, useThemeStore } from './api/store'
import { Theme, ThemeLight } from './components/Theme'
import "./styles/main.css"
import "./styles/container.css"
import './fonts/IBMPlexSansCondensed-Regular.ttf';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import Header from './components/Header';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  const currentTheme = useThemeStore((state) => state.currentTheme)
  const theeme = currentTheme === "dark" ? Theme : ThemeLight
  const store = authStore()
  const theme = useMemo(
    () => createTheme(theeme),
    [currentTheme],
  )
  useEffect(() => {
    store.get_token_from_localstorage()
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <div className="App">
          <Header />

          <Router />
        </div>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
