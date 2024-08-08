import React from 'react';
import Planning from '../assets/Planning.mp4'; // Import the second video
const HeroSection2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-screen-lg py-12 lg:py-20">
      {/* Video on the Left */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:mr-10 space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
        <div className="flex-1">
          <video
            src={Planning}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg border-4 border-yellow-500"
          >
            Your browser does not support the video tag.
          </video>
          <p className="mt-4 text-lg text-neutral-100 text-center lg:text-left">
            Experience the ease of recruitment with Smart-Recruit. Watch our
            video to learn more about our innovative platform.
          </p>
        </div>
      </div>

      {/* Welcome Passage on the Right */}
      <div className="text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          Welcome
          <span className="bg-gradient-to-r from-yellow-300 to-red-500 text-transparent bg-clip-text">
            {' '}
            To 🤖 Smart-Recruit
          </span>
        </h1>
        <p className="mt-10 text-lg text-neutral-200 max-w-4xl mx-auto lg:mx-0">
          At 🤖Smart-Recruit, we simplify the job search process by connecting
          talented professionals with the right opportunities. Whether you're a
          job seeker looking for your dream job or an employer searching for top
          talent, our platform provides a seamless experience tailored to your
          needs.
        </p>
      </div>
    </div>
  );
};

export default HeroSection2;
