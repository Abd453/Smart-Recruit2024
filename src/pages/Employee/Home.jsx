import React, { useRef } from 'react'; // Import useRef
import Jobs from '../../components/Job';
import Footer from '../../components/Footer';
import NavbarE from './navbarE';
import logo from '../../assets/logo.png';
import ielogo from '../../assets/ielogo.jpg';

export default function Home() {
  // Create a ref for the jobs section
  const jobsSectionRef = useRef(null);

  // Scroll to the jobs section when the button is clicked
  const scrollToJobs = () => {
    if (jobsSectionRef.current) {
      jobsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavbarE />

      {/* Welcome Intro Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${ielogo})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 md:p-12 rounded-lg">
          <img
            src={logo}
            alt="Logo"
            className="mb-6 w-28 md:w-36 lg:w-44 mx-auto"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            Welcome to the Job Portal
          </h1>
          <p className="text-lg md:text-xl text-white text-center mb-4">
            Find your dream job with us!
          </p>
          <button
            onClick={scrollToJobs} // Call the scroll function
            className="block mx-auto mt-4 px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Job List Section */}
      <div
        ref={jobsSectionRef} // Attach the ref here
        className="w-full p-6 md:p-12"
      >
        <div className="w-full max-w-4xl mx-auto">
          <Jobs />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
