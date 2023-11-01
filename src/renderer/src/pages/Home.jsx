import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';

import Sidebar from '../components/Sidebar';
// import Members from './Members';

export default function Home() {
  return (
    <div className="relative md:flex flex-grow">
      <Sidebar />
      <div className="min-h-full flex-1 p-5 relative">
        <Outlet />
      </div>
    </div>
  );
}
