import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [codePin, setCodePin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation
    if (!email || !codePin || !password) {
      setErrorMessage('All fields are required.');
      return;
    }
    // Implement login logic here
    navigate('/home'); // Redirect to home after successful login
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[400px] w-[350px] sm:w-[450px] lg:w-[600px] bg-[#fff3] rounded-[12px] border-4 shadow-inner">
        <h1 className="m-5 text-[30px] font-bold text-[#fff] underline">Login</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="m-5">
          <div className="flex w-[100%] mb-5">
            <label htmlFor="email" className="mr-2 text-[#fff] font-bold">Email ID:</label>
            <input
              className="w-[85%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-[100%] mb-5">
            <label htmlFor="CodeName" className="mr-2 text-[#fff] font-bold">CodePin:</label>
            <input
              className="w-[45%] h-[30px] rounded-full bg-[#fff5] pl-3 mr-4"
              type="text"
              id="CodeName"
              value={codePin}
              onChange={(e) => setCodePin(e.target.value)}
            />
            <label htmlFor="password" className="mr-2 text-[#fff] font-bold">Password:</label>
            <input
              className="w-[45%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="h-[40px] w-[100%] flex justify-center items-center bg-[#36ff12] rounded-full text-[#146e4d] font-extrabold text-[20px] hover:bg-[#b7f6ac] mb-6">Login now</button>
          <div className="flex w-[100%] mb-5 justify-center">
            <input type="checkbox" className="h-[20px] w-[20px] rounded-full bg-[#fff5] mr-6" id="click" />
            <label htmlFor="click" className="mr-2 text-[#fff] font-bold">Agree to the terms of use & privacy policy.</label>
          </div>
        </form>
        <div className="flex justify-evenly text-[#00ffff] text-[20px] font-bold underline">
          <div className="cursor-pointer" onClick={() => navigate('/SignUp')}>Create an Account</div>
          <div className="cursor-pointer" onClick={() => navigate('/Reset')}>Reset Password</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
