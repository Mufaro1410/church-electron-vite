import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import LoginPage from './pages/Login.jsx';
import RegistrationPage from './pages/Registration.jsx';
import SignupPage from './pages/Signup.jsx';

import Dashboard from './pages/Dashboard.jsx';
import Members from './pages/Members';
import Finance from './pages/Finance';
import Events from './pages/Events';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {

  return (
    <div className="min-h-screen flex sm:flex-col">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='registration' element={<RegistrationPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route  />
            <Route path="/*" element={<Home />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="members" element={<Members />} />
              <Route path="finance" element={<Finance />} />
              <Route path="events" element={<Events />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route index element={<Dashboard />} />
            </Route>
            <Route index element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;