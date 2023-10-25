// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Header from '../components/Header';

export default function LoginPage() {
  return (
    <div className="h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <Header
          heading="Login to your account"
          paragraph="Not registered yet? "
          linkName="Register"
          linkUrl="/registration"
        />
        <Login />
      </div>
    </div>
  )
}
{/* <div className="min-h-full h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}