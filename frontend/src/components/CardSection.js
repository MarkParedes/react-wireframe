import React from 'react';
import Card from './CardImage';

const CardSection = () => {
    const cards = [
        {
          title: 'Valuaciones Precisas',
          description: 'Utilizamos técnicas de aprendizaje automático para ofrecer resultados confiables y actualizados.',
          image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMHZhbHVhdGlvbnxlbnwwfHx8fDE3MzI0OTQ3NjN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=249' // Cambia esta URL por la imagen real
        },
        {
          title: 'Reporte detallado',
          description: 'Generamos un informe completo que incluye datos del avalúo, tales como plusvalía, tiempos de traslado, servicios cercanos y condiciones de tráfico.',
          image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=249,fit=crop/A1awv11NlOteVpJ7/generated/generated-dWxyWev1xnCQv7lB.png',
        },
        {
          title: 'Siempre actualizados',
          description: 'Hemos desarrollado un modelo que proporciona estimaciones de valor instantáneas y 100% digitales, mejorando continuamente el algoritmo.',
          image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMnx8cHJvcGVydHklMjB2YWx1YXRpb258ZW58MHx8fHwxNzMyNDk0NzYzfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=249',
        },
        {
          title: 'Alcance Geografico',
          description: 'Este proyecto está sustentado en las normas mexicanas de la secretaria de Economía y las metodologías de los servicios de avalúos regulados por el INDAABIN en todo el territorio mexicano.',
          image: 'https://i2.wp.com/www.turimexico.com/wp-content/uploads/2015/06/hcuauhtemoc2.jpg?resize=500%2C330&ssl=1',
        },
        {
          title: 'Avaluo Comercial',
          description: 'Dictamina el valor del inmueble en el mercado para la compra y venta.',
          image: 'https://th.bing.com/th/id/OIP.jWuoP1jdiVfi-Zh8lJiTDgHaEK?rs=1&pid=ImgDetMain',
        },
        {
          title: 'Valuaciones rápidas',
          description: 'Obtén valuaciones confiables y actualizadas de propiedades.',
          image: 'https://irp.cdn-website.com/e3a62094/dms3rep/multi/Aval%C3%BAo+comercial+del+inmueble.jpg',
        },
      ];
    

  return (
    <div className="p-8" style={{ backgroundColor: '#c4d7d4' }}>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Servicios de Avalúo</h1>
        <p className="mt-4 text-lg">Ofrecemos valuaciones precisas y objetivas mediante un simulador web avanzado y análisis de datos.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description} 
            image={card.image}
        />
        ))}
      </section>
    </div>
  );
};

export default CardSection;
