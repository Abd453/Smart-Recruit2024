import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInfinity } from 'react-icons/fa';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Welcome
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {' '}
          To IE Networks
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        At 🤖Smart-Recruit , we simplify the job search process by connecting
        talented professionals with the right opportunities. Whether you're a
        job seeker looking for your dream job or an employer searching for top
        talent, our platform provides a seamless experience tailored to your
        needs. For Job Seekers:
      </p>
      <div></div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex mt-10 justify-center">
        <h1
          className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wid 
          bg-gradient-to-r from-slate-500 to-red-800 text-transparent bg-clip-text"
        >
          {' '}
          Current openings
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
