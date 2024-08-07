import React, { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaInfinity, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import Db from "../data/db.json"; // Ensure this import is correct

const Jobs = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [animationClass, setAnimationClass] = useState('fadeIn');

  const cardsPerSection = 2;
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
      <div className="flex gap-10 justify-center flex-wrap items-center">
        {currentCards.map((db) => (
          <div
            key={db.id}
            className={`mt-10 group w-[250px] p-[20px] rounded-[10px] transition duration-500 ease-in-out ${animationClass}
             hover:bg-gradient-to-r from-[#DC2424] to-[#4A569D] shadow-lg hover:shadow-lg`}
          >
            <span className="flex justify-between items-center gap-4 pb-5">
              <h1 className="text-[24px]">{db.title}</h1>
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
            <p
              className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]
             group-hover:text-white pb-5"
            >
              {db.description}
            </p>
            <button
              className="border-[2px] rounded-[10px] block p-[10px] w-full
             text-[14px] font-semibold hover:bg-gradient-to-r from-orange-500 to-red-800 group-hover:text-white transition duration-300"
            >
              Apply now
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0}
          className="bg-slate-500 hover:bg-red-950 text-white px-7 py-3 rounded disabled:opacity-50 flex items-center"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentSection === totalSections - 1}
          className="bg-slate-500 hover:bg-green-950 text-white px-7 py-3 rounded disabled:opacity-50 flex items-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Jobs;
