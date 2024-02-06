import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A7DFF] mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center">
            We are a passionate team dedicated to providing quality services and
            making a positive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/team-photo.jpg"
              alt="Team Photo"
              className="rounded-full h-60 w-60 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-[#0A7DFF] mb-2">
              Our Team
            </h2>
            <p className="text-gray-700 text-center">
              Meet our dedicated team of professionals who work together to
              achieve common goals.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="/mission-vision.jpg"
              alt="Mission and Vision"
              className="rounded-md h-60 w-full object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-[#0A7DFF] mb-2">
              Mission & Vision
            </h2>
            <p className="text-gray-700 text-center">
              Our mission is to deliver excellence, and our vision is to create
              a positive impact in every endeavor.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-[#0A7DFF] mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">Quality Service</li>
            <li className="mb-2">Integrity and Transparency</li>
            <li className="mb-2">Innovation and Creativity</li>
            <li className="mb-2">Customer Satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
