import { useMemo, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useThemeStore} from './store'
import {Theme} from './components/Theme'
import "./styles/main.css"
import "./styles/container.css"
import './fonts/IBMPlexSansCondensed-Regular.ttf';


function App() {
  const currentTheme = useThemeStore((state) => state.currentTheme)

  const theme = useMemo(
    () => createTheme(Theme),
    [currentTheme],
  )

  return (
    <BrowserRouter>
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <div className="App">
        <Router />
      </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
