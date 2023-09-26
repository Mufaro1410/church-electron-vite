import { CssBaseline } from '@mui/material';
// import Login from './pages/Login';
// import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <CssBaseline />
      <Outlet />
    </div>
  );
}

export default App;