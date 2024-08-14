import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
import ielogo from '../assets/logo.png';
import ielogoo from '../assets/ielogoo.jpg';

const Login = () => {
  
  const [Data, setData] = useState({
    id: "",
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(true);
  const [validatorTo, setValidatorTo] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};
  
    // Validate email
    if (Data.email === '' || Data.email === null) {
      isValid = false;
      validationErrors.email = 'Email required';
    }
  
    // Validate password
    if (Data.password === '' || Data.password === null) {
      isValid = false;
      validationErrors.password = 'Password required';
    } else if (Data.password.length < 2) {
      isValid = false;
      validationErrors.password = 'Minimum length is 2';
    }
  
    // Set errors and validation state
    setErrors(validationErrors);
    setValid(isValid);
  
    if (isValid) {
      axios
        .get('http://localhost:8001/signupuser')
        .then((result) => {
          let loginSuccessful = false;
          let userId = null; // To store the user ID
  
          result.data.forEach((user) => {
            if (user.email === Data.email) {
              if (user.password === Data.password) {
                alert('Login successfully');
                loginSuccessful = true;
                userId = user.id; // Capture the user ID
              } else {
                isValid = false;
                validationErrors.password = 'Wrong password';
              }
            }
          });
  
          if (!loginSuccessful) {
            if (Data.email !== '') {
              validationErrors.email = 'Wrong email address';
            }
            setErrors(validationErrors);
            setValid(isValid);
            setValidatorTo(false);
          } else {
            // Navigate to the next page with user ID
            navigate('/employeehome', { state: { userId } });
          }
        })
        .catch((err) => console.log(err));
    } else {
      setValidatorTo(false);
    }
  };
  

  console.log(Data); // For debugging, log the current Data state

  return (
    <section
      className="bg-gradient-to-r h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${ielogoo})` }}
    >
      <div className="md:w-1/3 max-w-sm ">
        <img src={ielogo} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Log in page
          </p>
        </div>
        <div className="text-danger">
          {isValid ? (
            <></>
          ) : (
            <span>
              {' '}
              {errors.email} {errors.password}{' '}
            </span>
          )}
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-black border-b border-black bg-white rounded px-4 py-2 mb-7 outline-none focus:outline-none"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(70, 130, 180, 0.7)',
                }} // Brighter sky-blue shadow
                onChange={(event) =>
                  setData({ ...Data, email: event.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent text-black border-b border-black bg-white rounded px-4 py-2 mb-2 outline-none focus:outline-none"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(70, 130, 180, 0.7)',
                }} // Brighter sky-blue shadow
                onChange={(e) => setData({ ...Data, password: e.target.value })}
              />
            </div>

            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
