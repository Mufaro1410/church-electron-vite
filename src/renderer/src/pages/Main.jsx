import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { Box, Toolbar, CssBaseline } from '@mui/material'

import Navbar from '../components/Navbar';
import Home from './Home';
import Members from './Members';
import Finance from './Finance';
import Events from './Events';
import Reports from './Reports';
import Settings from './Settings';

export default function Main() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="finance" element={<Finance />} />
          <Route path="events" element={<Events />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
