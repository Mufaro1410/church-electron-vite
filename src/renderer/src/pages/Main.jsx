import { Routes, Route } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Home from './Home';
import Members from './Members';
import Finance from './Finance';
import Events from './Events';
import Reports from './Reports';
import Settings from './Settings';

export default function Main() {
  return (
    <div className="relative md:flex flex-grow">
      <Sidebar />
      <div className="h-screen flex-1 p-5 relative">
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
