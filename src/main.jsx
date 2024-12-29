import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InputFeild from './components/inputfeild'
// import Head from './components/Head'
// import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputFeild />
  </StrictMode>
)
