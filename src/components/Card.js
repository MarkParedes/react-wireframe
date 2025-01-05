import React from 'react';

const Card = ({ title, description, className }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${className}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
