import React from 'react';
// Import images
import experience from '../../assets/landingPageImg/experience.jpg';
import cases from '../../assets/landingPageImg/cases.jpg';
import partner from '../../assets/landingPageImg/partner.jpg';

const Experience = () => {
  return (
    <section className="grid sm:grid-cols-3 gap-6 items-center mt-16">
      <div className="flex flex-col items-center text-center bg-white border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src={experience} alt="Experience" className="w-16 h-16 mb-4" />
        <h5 className="font-bold text-2xl text-blue-600 mb-2">10+</h5>
        <p>Years Experience</p>
      </div>
      <div className="flex flex-col items-center text-center bg-white border rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-[0_4px_6px_rgba(139,69,19,0.3)]">
        <img src={cases} alt="Cases Solved" className="w-16 h-16 mb-4" />
        <h5 className="font-bold text-2xl text-blue-600 mb-2">890</h5>
        <p>Cases Solved</p>
      </div>
      <div className="flex flex-col items-center text-center bg-white border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <img src={partner} alt="Business Partners" className="w-16 h-16 mb-4" />
        <h5 className="font-bold text-2xl text-blue-600 mb-2">250</h5>
        <p>Business Partners</p>
      </div>
    </section>
  );
};

export default Experience;
