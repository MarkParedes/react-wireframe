import React from 'react';

const HeroSection = () => {
  return (
    <header className="text-center p-8 bg-blue-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      <p className="mt-4 text-lg">This is a short description of the site.</p>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded">
        Get Started
      </button>
    </header>
  );
};

export default HeroSection;
