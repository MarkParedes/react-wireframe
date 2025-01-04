import React from 'react';
import Card from './Card';

const CardSection = () => {
    const cards = [
        {
          title: 'Valuaciones Precisas',
          description: 'Utilizamos técnicas de aprendizaje automático para ofrecer resultados confiables y actualizados.',
          image: 'https://via.placeholder.com/328x249' // Cambia esta URL por la imagen real
        },
        {
          title: 'Reporte detallado',
          description: 'Generamos un informe completo que incluye datos del avalúo, tales como plusvalía, tiempos de traslado, servicios cercanos y condiciones de tráfico.',
          image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=249,fit=crop/A1awv11NlOteVpJ7/generated/generated-dWxyWev1xnCQv7lB.png',
        },
        {
          title: 'Siempre actualizados',
          description: 'Hemos desarrollado un modelo que proporciona estimaciones de valor instantáneas y 100% digitales, mejorando continuamente el algoritmo.',
          image: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Alcance Geografico',
          description: 'Este proyecto está sustentado en las normas mexicanas de la secretaria de Economía y las metodologías de los servicios de avalúos regulados por el INDAABIN en todo el territorio mexicano.',
          image: 'https://enamonada.com/wp-content/uploads/sites/6/Admin/a-stunning-modern-architectural-masterpiece-f-1536x1024.jpg',
        },
        {
          title: 'Avaluo Comercial',
          description: 'Dictamina el valor del inmueble en el mercado para la compra y venta.',
          image: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Valuaciones rápidas',
          description: 'Obtén valuaciones confiables y actualizadas de propiedades.',
          image: 'https://via.placeholder.com/400x300',
        },
      ];
    

  return (
    <div className="p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Servicios de Avalúo</h1>
        <p className="mt-4 text-lg">Ofrecemos valuaciones precisas y objetivas mediante un simulador web avanzado y análisis de datos.</p>
      </header>

      {/* Sección de tarjetas */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </section>
    </div>
  );
};

export default CardSection;
