import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: 0;
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #171818;
    color: white;
    min-height: 100vh;
    font-family: "Inter", sans-serif;
  }

`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
