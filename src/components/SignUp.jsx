import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup validation
    if (!email || !name || !dob) {
      setErrorMessage('All fields are required.');
      return;
    }
    // Implement signup logic here
    navigate('/SignUpVerify'); // Redirect to verification page
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[400px] w-[350px] sm:w-[450px] lg:w-[600px] bg-[#fff3] rounded-[12px] border-4 shadow-inner">
        <h1 className="m-5 text-[30px] font-bold text-[#fff] underline">Sign Up</h1>
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
            <label htmlFor="Name" className="mr-2 text-[#fff] font-bold">Name:</label>
            <input
              className="w-[85%] h-[30px] rounded-full bg-[#fff5] pl-3 mr-4"
              type="text"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-[100%] mb-5">
            <label htmlFor="dbo" className="mr-2 text-[#fff] font-bold">Date Of Birth:</label>
            <input
              className="w-[45%] h-[30px] rounded-full bg-[#fff5] pl-3"
              type="date"
              id="dbo"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button type="submit" className="h-[40px] w-[100%] flex justify-center items-center bg-[#36ff12] rounded-full text-[#146e4d] font-extrabold text-[20px] hover:bg-[#b7f6ac] mb-6">Verify</button>
          <div className="flex w-[100%] mb-5 justify-center">
            <input type="checkbox" className="h-[20px] w-[20px] rounded-full bg-[#fff5] mr-6" id="click" />
            <label htmlFor="click" className="mr-2 text-[#fff] font-bold">Agree to the terms of use & privacy policy.</label> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
