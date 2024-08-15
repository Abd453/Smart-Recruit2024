import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ielogo from '../assets/logo.png';
import ielogoo from '../assets/ielogoo.jpg';
import { AuthContext } from '../utils/AuthContext';

const Login = () => {
  const [Data, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(true);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    // Validate email
    if (Data.email === '') {
      isValid = false;
      validationErrors.email = 'Email required';
    }

    // Validate password
    if (Data.password === '') {
      isValid = false;
      validationErrors.password = 'Password required';
    } else if (Data.password.length < 2) {
      isValid = false;
      validationErrors.password = 'Minimum length is 2';
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      axios
        .get('http://localhost:8001/signupuser')
        .then((result) => {
          let loginSuccessful = false;
          let userId = null;
          let userRole = null;

          result.data.forEach((user) => {
            if (user.email === Data.email) {
              if (user.password === Data.password) {
                alert('Login successfully');
                loginSuccessful = true;
                userId = user.id;
                userRole = user.role;
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
          } else {
            setAuth({
              isAuthenticated: true,
              userRole,
              userId,
            });

            // Navigate to the appropriate home page and pass the userId in state
            switch (userRole) {
              case 'teamlead':
                navigate('/teamleadhome', { state: { userId } });
                break;
              case 'manager':
                navigate('/managerhome', { state: { userId } });
                break;
              case 'employee':
                navigate('/employeehome', { state: { userId } });
                break;
              default:
                navigate('/', { state: { userId } });
                break;
            }
          }
        })
        .catch((err) => console.error('Error fetching user data:', err));
    }
  };

  console.log('Current Data State:', Data);
  console.log('Current Errors State:', errors);

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
          {!isValid && (
            <span>
              {errors.email} {errors.password}
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
                }}
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
                }}
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
