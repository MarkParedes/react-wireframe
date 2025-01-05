import React from 'react';
import Card from './Card';

const HeroSection = () => {

  const imports = [
    { title: 'Antigüedad', description: 'La antigüedad influye en la percepción del valor.'},
    { title: 'Tamaño', description: 'El tamaño afecta el valor de la propiedad.'},
    { title: 'Ubicación', description: 'La ubicación determina el acceso y la demanda local.'},
  ];

  return (
    <header className="text-center p-8 bg-blue-900 text-white">
      <h1 className="text-4xl font-bold">Valuaciones precisas y objetivas para los profesionales del área</h1>
      <p className="mt-4 text-lg">Utilizamos aprendizaje automático para ofrecerte un análisis de plusvalía en la Ciudad de México.</p>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded">
        Descubre
      </button>
      <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {imports.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description}
            className="bg-green-500"
          />
        ))}
      </section>
      </div>
    </header>
  );
};

export default HeroSection;
