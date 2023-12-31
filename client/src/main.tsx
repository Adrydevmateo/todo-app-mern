import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/stylesheets/index.css'
import '@fontsource/jetbrains-mono'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
