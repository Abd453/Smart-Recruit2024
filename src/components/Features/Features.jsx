import React from 'react';
import Planning from '../../assets/Planning.mp4'; // Ensure the correct path to your video

const Features = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 bg-gradient-to-r from-blue-800 to-pink-600 text-white">
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
              Discover how effortless recruitment can be with Smart-Recruit.
              Check out our video to see how our cutting-edge platform
              simplifies the hiring process.
            </p>
          </div>
        </div>

        {/* Features List on the Right */}
        <div className="text-center lg:text-left lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-red-500 text-transparent bg-clip-text">
              🤖 Smart-Recruit Features:
            </span>
          </h2>
          <p className="mt-10 text-lg text-neutral-200 max-w-4xl mx-auto lg:mx-0">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                🌟 <strong>Find Your Dream Job:</strong> Connect with
                opportunities that match your skills and career goals.
              </li>
              <li>
                🕵️‍♂️ <strong>Discover Top Talent:</strong> Easily find and hire
                skilled professionals for your team.
              </li>
              <li>
                🚀 <strong>Streamlined Hiring:</strong> Efficiently manage job
                applications and recruitment processes.
              </li>
              <li>
                🧩 <strong>Tailored Matches:</strong> Get personalized
                recommendations based on your preferences and needs.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
