import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Imagen en la parte superior */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;