import React from 'react';
// Import images
import experience from '../../assets/landingPageImg/experience.jpg';
import cases from '../../assets/landingPageImg/cases.jpg';
import partner from '../../assets/landingPageImg/partner.jpg';

const Experience = () => {
  return (
    <section className="grid sm:grid-cols-3 gap-6 items-center mt-16">
      <h5 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r bg-slate-950 text-transparent bg-clip-text">
        Solution
      </h5>
      <div className="flex flex-col items-center text-center bg-white border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src={experience} alt="Experience" className="w-16 h-16 mb-4" />
        <h5 className="font-bold text-2xl text-blue-600 mb-2">10+</h5>
        <p>Years Experience</p>
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-red-300 to-orange-500 text-transparent bg-clip-text">
        Experience
      </h1>

      <div className="flex flex-col items-center text-center bg-white border rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-[0_4px_6px_rgba(139,69,19,0.3)]">
        <img src={cases} alt="Cases Solved" className="w-16 h-16 mb-4" />
        <h5 className="font-bold text-2xl text-blue-600 mb-2">890</h5>
        <p>Cases Solved</p>
      </div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r bg-white text-transparent bg-clip-text">
        Partners
      </h1>
      <div className="flex flex-col items-center text-center bg-white border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src={partner} alt="Business Partners" className="w-16 h-16 mb-4" />
        <h5 className="font-bold text-2xl text-blue-600 mb-2">250</h5>
        <p>Business Partners</p>
      </div>
    </section>
  );
};

export default Experience;