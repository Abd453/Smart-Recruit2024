import React, { useState, useEffect } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInfinity, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import Db from '../../data/db.json'; // Ensure this import is correct
// import Testimonials from '../Testimonial/Testimonials';

import { Link } from 'react-router-dom';


const Cards = ({ userId , disapply = true}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [animationClass, setAnimationClass] = useState('fadeIn');

  const cardsPerSection = 3;
  const totalSections = Math.ceil(Db.length / cardsPerSection);

  const handleNext = () => {
    if (currentSection < totalSections - 1) {
      setAnimationClass('fadeOut');
      setTimeout(() => {
        setCurrentSection(currentSection + 1);
        setAnimationClass('fadeIn');
      }, 500); // Match the duration of the fade-out animation
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setAnimationClass('fadeOut');
      setTimeout(() => {
        setCurrentSection(currentSection - 1);
        setAnimationClass('fadeIn');
      }, 500); // Match the duration of the fade-out animation
    }
  };

  const currentCards = Db.slice(
    currentSection * cardsPerSection,
    (currentSection + 1) * cardsPerSection
  );

  return (
    <div className="relative py-10">
      <div className="flex mt-10 justify-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Current Openings
        </h1>
      </div>
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${animationClass}`}
          style={{ transform: `translateX(-${currentSection * 100}%)` }}
        >
          {Db.map((db) => (
            <div key={db.id} className="flex-shrink-0 w-full sm:w-1/3 p-4">
              <div className="p-6 rounded-lg shadow-lg bg-white transition duration-500 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg">
                <span className="flex justify-between items-center gap-4 pb-5">
                  <h1 className="text-xl">{db.title}</h1>
                  <span className="flex items-center gap-1">
                    <BiTimeFive />
                    {db.time}
                  </span>
                </span>
                <h6 className="flex items-center gap-1">
                  <FaInfinity />
                  {db.pertemp}
                </h6>
                <h6 className="flex items-center gap-1">
                  <CiLocationOn />
                  {db.location}
                </h6>
                <h6 className="flex items-center gap-1">
                  <RiMoneyDollarBoxLine />
                  {db.money}
                </h6>
                <p className="text-sm text-gray-600 pt-4 border-t-2 mt-4 group-hover:text-white">
                  {db.description}
                </p>
                {disapply && (
                <div> 
                <Link to={`/applyform/${userId}`} >
                <button className="border-2 rounded-lg block p-2 w-full text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                  Apply Now
                </button>
                </Link>
                </div>)}

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSection === totalSections - 1}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full ${
                currentSection === index ? 'bg-blue-700' : 'bg-blue-400'
              } transition-colors duration-300`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Cards;
