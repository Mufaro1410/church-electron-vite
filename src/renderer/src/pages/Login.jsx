// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Header from '../components/Header';

export default function LoginPage() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // credential verification code goes here
  //   navigate('/main');
  //   setUsername('')
  //   setPassword('')
  // };

  return (
    <div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  )
}
