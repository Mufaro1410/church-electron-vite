import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';

function App() {

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path="main/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;