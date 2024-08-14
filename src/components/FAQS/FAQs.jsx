import React from 'react';

const FAQs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-pink-600 text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-300 to-red-500 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg border-2 border-blue-700">
            <h3 className="text-xl font-semibold mb-2">
              What services do you offer?
            </h3>
            <p>
              We offer a range of services including web development, branding,
              and digital marketing. Our team works closely with you to
              understand your needs and deliver tailored solutions to help you
              achieve your goals.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg border-2 border-green-700">
            <h3 className="text-xl font-semibold mb-2">
              How can I get in touch with you?
            </h3>
            <p>
              You can reach us via email at{' '}
              <a href="mailto:info@example.com" className="text-yellow-300">
                info@example.com
              </a>
              . You can also fill out our contact form on the "Let's Talk" page,
              and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-yellow-600 p-6 rounded-lg shadow-lg border-2 border-red-700">
            <h3 className="text-xl font-semibold mb-2">
              What is your pricing structure?
            </h3>
            <p>
              Our pricing varies depending on the scope and complexity of the
              project. We offer custom quotes based on your specific
              requirements. Please reach out to us for a detailed proposal and
              pricing information.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg border-2 border-blue-700">
            <h3 className="text-xl font-semibold mb-2">
              Do you offer support after the project is completed?
            </h3>
            <p>
              Yes, we provide support and maintenance services to ensure
              everything runs smoothly after the project is completed. We offer
              different support packages based on your needs.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg border-2 border-green-700">
            <h3 className="text-xl font-semibold mb-2">
              How long does it take to complete a project?
            </h3>
            <p>
              The timeline for completing a project depends on its complexity
              and scope. We will provide an estimated timeline after discussing
              your project details. Our goal is to deliver high-quality results
              within the agreed-upon timeframe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
