import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main.jsx';
import LoginPage from './pages/Login.jsx';
import SignupPage from './pages/Signup.jsx';

function App() {

  return (
    <div className="box-border m-0 p-0">
      <div>
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