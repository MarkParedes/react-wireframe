import React, { useEffect, useState } from 'react';
import Card from './CardImage';

const FactoresClaves = () => {
  const [factores, setFactores] = useState([]);

  // Consumir la API
  useEffect(() => {
    fetch('http://localhost:5000/api/factores')
      .then((response) => response.json())
      .then((data) => setFactores(data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div className="p-8" style={{ backgroundColor: '#c4d7d4' }}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Factores Clave</h1>
        <p className="mt-4 text-lg">Explora los elementos esenciales para una correcta valoración.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {factores.map((factor, index) => (
          <Card
            key={index}
            title={factor.title}
            description={factor.description}
            image={factor.image || 'https://via.placeholder.com/503x360?text=Imagen+no+disponible'}
            additionalClasses="bg-green-500 text-green-800"
          />
        ))}
      </section>
    </div>
  );
};

export default FactoresClaves;
