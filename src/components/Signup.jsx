import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import logo from '../assets/ie.png';
import axios from 'axios';
import Footer from './Footer';
import bgimg from "../assets/bgImg/bgimg2.jpg"

export default function Signup() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmpass: '',
    physicaladdress: '',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Reset the form state when the component mounts
    setData({
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmpass: '',
      physicaladdress: '',
    });
  }, []); // Empty dependency array ensures this runs only on component mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    if (data.fname === '') {
      isValid = false;
      validationErrors.fname = 'First name required';
    }
    if (data.lname === '') {
      isValid = false;
      validationErrors.lname = 'Last name required';
    }
    if (data.email === '') {
      isValid = false;
      validationErrors.email = 'Email required';
    }
    if (data.password === '') {
      isValid = false;
      validationErrors.password = 'Password required';
    }
    if (data.password !== data.confirmpass) {
      isValid = false;
      validationErrors.confirmpass = 'Passwords do not match';
    }
    // Add more validations as needed

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      const fullname = `${data.fname} ${data.lname}`;
      axios
        .post('http://localhost:8001/signupuser', data)
        .then((result) => {
          alert('Success');
          setData({
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmpass: '',
            physicaladdress: '',
          });

          // Redirect to login page
          navigate('/login');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
    <div className='bg-cover bg-center flex'
    style={{ backgroundImage: `url(${bgimg})` }}>
    <div className="max-w-4xl mx-auto font-sans p-6">
      <div className="text-center mb-16">
        <a href="">
          <img src={logo} alt="logo" className="w-52 inline-block" />
        </a>
        <h4 className="text-white text-base font-bold shadow-md shadow-black pb-8 pt-4 flex items-center justify-center mt-6">
                    Signup Form
                </h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-white text-md mb-2 block">
              First name
            </label>
            <input
              name="fname"
              type="text"
              value={data.fname}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="First name"
            />
            {errors.fname && (
              <p className="text-red-500 text-sm">{errors.fname}</p>
            )}
          </div>
          <div>
            <label className="text-white text-md mb-2 block">
              Last name
            </label>
            <input
              name="lname"
              type="text"
              value={data.lname}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Last name"
            />
            {errors.lname && (
              <p className="text-red-500 text-sm">{errors.lname}</p>
            )}
          </div>
          <div>
            <label className="text-white text-md mb-2 block">Email</label>
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-white text-md mb-2 block">Password</label>
            <input
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label className="text-white text-md mb-2 block">
              Confirm password
            </label>
            <input
              name="confirmpass"
              type="password"
              value={data.confirmpass}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Confirm password"
            />
            {errors.confirmpass && (
              <p className="text-red-500 text-sm">{errors.confirmpass}</p>
            )}
          </div>
          <div>
            <label className="text-white text-md mb-2 block">Physical Address</label>
            <input
              name="physicaladdress"
              type="text"
              value={data.physicaladdress}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Physical address"
            />
            {errors.physicaladdress && (
              <p className="text-red-500 text-sm">{errors.physicaladdress}</p>
            )}
          </div>
        </div>

        <div className="mt-12 flex justify-center ">
          <button
            type="submit"
            className=" py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-red-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
    
    </div>
    <Footer />
    </div>
  );
}
