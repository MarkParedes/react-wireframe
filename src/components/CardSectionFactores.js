import React from 'react';
import Card from './Card';

const FactoresClaveSection = () => {
  const factors = [
    { title: 'Antigüedad', description: 'La antigüedad influye en la percepción del valor.', image: 'https://via.placeholder.com/150' },
    { title: 'Tamaño', description: 'El tamaño afecta el valor de la propiedad.', image: 'https://via.placeholder.com/150' },
    { title: 'Ubicación', description: 'La ubicación determina el acceso y la demanda local.', image: 'https://via.placeholder.com/150' },
    { title: 'Servicios Cercanos', description: 'La proximidad a servicios mejora la conveniencia y lo vuelven más atractivo.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="p-8 bg-green-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800">Factores Clave</h1>
        <p className="mt-4 text-lg text-green-700">Explora los elementos esenciales para una correcta valoración.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {factors.map((factor, index) => (
          <Card
            key={index}
            title={factor.title}
            description={factor.description}
            image={factor.image}
            additionalClasses="bg-green-200 text-green-800" 
          />
        ))}
      </section>
    </div>
  );
};

export default FactoresClaveSection;
