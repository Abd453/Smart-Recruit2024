import React from 'react';
import Recruiting from '../assets/Recruiting.mp4';
import Planning from '../assets/Planning.mp4'; // Import the second video
// import HeroSection2 from './HeroSection2';
// import Testimonials from './Testimonial/Testimonials';
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 bg-gradient-to-r from-blue-800 to-pink-600 text-white">
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:p-12 mt-10">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition-colors duration-300 border-2 border-blue-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Job Posting
          </h2>
          <p className="text-white">
            Post job openings with ease. Customize your listings and reach the
            right candidates quickly.
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Application Tracking
          </h2>
          <p className="text-white">
            Keep track of your job applications seamlessly. Review and manage
            candidate progress in one place.
          </p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-yellow-600 p-6 rounded-lg shadow-lg hover:from-yellow-600 hover:to-red-500 transition-colors duration-300 border-2 border-red-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Email Notifications
          </h2>
          <p className="text-white">
            Stay updated with automated email notifications. Get real-time
            alerts for application updates and more.
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-500 transition-colors duration-300 border-2 border-blue-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Advanced Filters
          </h2>
          <p className="text-white">
            Use advanced filters to refine job searches and find the perfect
            candidates faster.
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg hover:from-teal-600 hover:to-green-500 transition-colors duration-300 border-2 border-green-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Custom Reports
          </h2>
          <p className="text-white">
            Generate custom reports to analyze recruitment metrics and improve
            your hiring strategy.
          </p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-yellow-600 p-6 rounded-lg shadow-lg hover:from-yellow-600 hover:to-red-500 transition-colors duration-300 border-2 border-red-700">
          <h2 className="text-2xl font-semibold mb-2 text-white">
            User Management
          </h2>
          <p className="text-white">
            Manage user roles and permissions efficiently. Customize access
            levels for different team members.
          </p>
        </div>
      </section>

      {/* <HeroSection2 /> */}

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
            talented professionals with the right opportunities. Whether you're
            a job seeker looking for your dream job or an employer searching for
            top talent, our platform provides a seamless experience tailored to
            your needs.
          </p>
        </div>
      </div>
      {/* <section className="mt-10">
        <Testimonials />
      </section> */}
    </div>
  );
};

export default HeroSection;
