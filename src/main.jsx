import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScoreBoard from './ScoreBoard.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreBoard />
  </StrictMode>,
)
