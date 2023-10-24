import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="relative md:flex flex-grow">
      <Sidebar />
      <div className="h-screen flex-1 p-5 relative">
        <Outlet />
      </div>
    </div>
  );
}
