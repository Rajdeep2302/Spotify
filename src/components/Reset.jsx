import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Reset = () => {
  const navigate = useNavigate();
  const [codePin, setCodePin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (!codePin || !newPassword || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    // Implement password reset logic here
    navigate('/login'); // Redirect to login after successful reset
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[400px] w-[350px] sm:w-[450px] lg:w-[600px] bg-[#fff3] rounded-[12px] border-4 shadow-inner">
        <h1 className="m-5 text-[30px] font-bold text-[#fff] underline">Reset Password</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleReset} className="m-5">
          <div className="flex flex-wrap w-[100%] mb-5">
            <label htmlFor="Code" className="mr-2 text-[#fff] font-bold">Enter CodePin:</label>
            <input
              className="w-[40%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="text"
              id="Code"
              value={codePin}
              onChange={(e) => setCodePin(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap w-[100%] mb-5">
            <label htmlFor="Password" className="mr-2 text-[#fff] font-bold">Enter New Password:</label>
            <input
              className="w-[50%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="password"
              id="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap w-[100%] mb-5">
            <label htmlFor="CPassword" className="mr-2 text-[#fff] font-bold">Confirm Password:</label>
            <input
              className="w-[50%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="password"
              id="CPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="h-[40px] w-[90%] flex justify-center items-center bg-[#36ff12] rounded-full text-[#146e4d] font-extrabold text-[20px] hover:bg-[#b7f6ac] mb-6">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
