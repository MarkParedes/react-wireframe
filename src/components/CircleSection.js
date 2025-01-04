import React from 'react';

const CirculosSection = () => {
  const circulos = [
    { text: 'Estudio del mercado' },
    { text: 'Análisis exhaustivo' },
    { text: 'Recomendaciones precisas' },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Pilares de Nuestra Metodología</h1>
        <p className="mt-4 text-lg">Cada paso está diseñado para garantizar resultados confiables.</p>
      </header>

      <div className="flex justify-center items-center gap-4">
        {circulos.map((circulo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full shadow-md p-4 text-center ${
              index === 1 ? 'w-60 h-60 bg-blue-400 text-white text-lg' : 'w-40 h-40 bg-blue-200 text-blue-800'
            }`}
          >
            {circulo.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CirculosSection;
