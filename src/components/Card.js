import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Card;
