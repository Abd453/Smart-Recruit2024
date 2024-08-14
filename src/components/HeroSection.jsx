import React from 'react';
import Recruiting from '../assets/Recruiting.mp4';


const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center mt-6 lg:mt-20 bg-gradient-to-r from-blue-800 to-pink-600 text-white"
    >
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-screen-lg py-12 lg:py-20">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Welcome
            <span className="bg-gradient-to-r from-yellow-300 to-red-500 text-transparent bg-clip-text">
              {' '}
              To 🤖 Smart-Recruit
            </span>
          </h1>
          <p className="mt-10 text-lg text-neutral-200 max-w-4xl mx-auto lg:mx-0">
            At 🤖Smart-Recruit, we simplify the job search process by connecting
            talented professionals with the right opportunities. Whether you're
            a job seeker looking for your dream job or an employer searching for
            top talent, our platform provides a seamless experience tailored to
            your needs.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center lg:items-start lg:ml-10 space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
          <div className="flex-1">
            <video
              src={Recruiting}
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
      </div>
    </section>
  );
};

export default HeroSection;