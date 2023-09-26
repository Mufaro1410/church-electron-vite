import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Main from './pages/Main.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Login />} />
          <Route path="main/*" element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);