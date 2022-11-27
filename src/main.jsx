import React from 'react'
import { ThemeProvider } from 'react-bootstrap'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
