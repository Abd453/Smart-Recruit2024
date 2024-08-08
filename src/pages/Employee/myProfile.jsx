import React, { useState, useEffect } from 'react';
import NavbarE from './navbarE';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.png'; // Assume you have a profile image here
import pp from '../../assets/profile-pictures/user2.jpg';

// Importing the user data from the JSON file
import authData from '../../data/auth.json'; // Assuming auth.json is in a data directory

export default function MyProfile() {
  // Initial state setup for the user
  const [user, setUser] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    'confirm password': '',
  });

  // Load user data on component mount
  useEffect(() => {
    // Simulate fetching user data from JSON
    const userData = authData.signupuser.find((user) => user.id === '644c'); // Assume we get the first user by ID
    if (userData) {
      setUser(userData);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user in auth.json
    // In a real app, you would send a request to a backend server here
    console.log('User data updated:', user);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarE />

      <div className="flex-grow flex">
        {/* Left Section - Profile Card */}
        <div className="w-full md:w-1/3  p-6 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <img
              src={pp}
              alt="User Profile"
              className="w-24 h-24 rounded-full mx-auto mb-6"
            />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {user.fname} {user.lname}
            </h2>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-2/3 p-6">
          <div className="bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fname"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={user.fname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lname"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={user.lname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirm password"
                  value={user['confirm password']}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
