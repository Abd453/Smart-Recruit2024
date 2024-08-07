import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to SmartRecruit</h1>
        <p className="text-lg mb-8">
          Your solution for streamlined recruitment and onboarding.
        </p>
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 p-2 rounded"
        >
          {/* in css what do we call padding */}
          Login
        </Link>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Job Posting</h2>
          <p>Easily post job openings with all necessary details.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Application Tracking</h2>
          <p>Manage and track job applications efficiently.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Email Notifications</h2>
          <p>Automated updates for application statuses.</p>
        </div>
      </section>
      <footer className="text-center mt-12">
        <p className="text-gray-600">
          &copy; 2024 SmartRecruit. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
