import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpVerify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [codePin, setCodePin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMessage('OTP is required.');
      return;
    }
    // Implement OTP verification logic here
  };

  const handleCreatePassword = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword || !codePin) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    // Implement password creation logic here
    navigate('/login'); // Redirect to login after password creation
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[400px] w-[350px] sm:w-[450px] lg:w-[600px] bg-[#fff3] rounded-[12px] border-4 shadow-inner">
        <h1 className="m-5 text-[30px] font-bold text-[#fff] underline">Sign Up Verification</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleVerify} className="m-5">
          <div className="flex justify-evenly flex-wrap w-[100%] mb-5">
            <label htmlFor="emailOTP" className="mr-2 text-[#fff] font-bold">OTP:</label>
            <input
              className="w-[30%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="number"
              id="emailOTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit" className="h-[40px] w-[50%] flex justify-center items-center bg-[#36ff12] rounded-full text-[#146e4d] font-extrabold text-[20px] hover:bg-[#b7f6ac] mb-6">Verify</button>
          </div>
        </form>
        <form onSubmit={handleCreatePassword} className="m-5">
          <div className='flex flex-wrap w-[100%] mb-5'>
            <label htmlFor="Password" className="mr-2 text-[#fff] font-bold">Create Password:</label>
            <input
              className="w-[100%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex flex-wrap w-[100%] mb-5'>
            <label htmlFor="CPassword" className="mr-2 text-[#fff] font-bold">Confirm Password:</label>
            <input
              className="w-[100%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="password"
              id="CPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='flex flex-wrap w-[100%] mb-5'>
            <label htmlFor="Code" className="mr-2 text-[#fff] font-bold">Enter CodePin:</label>
            <input
              className="w-[100%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="password"
              id="Code"
              value={codePin}
              onChange={(e) => setCodePin(e.target.value)}
            />
          </div>
          <button type="submit" className="h-[40px] w-[100%] flex justify-center items-center bg-[#36ff12] rounded-full text-[#146e4d] font-extrabold text-[20px] hover:bg-[#b7f6ac] mb-6">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpVerify;
