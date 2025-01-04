import React from 'react';
import Card from './Card';

const CardSection = () => {
  const cards = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 4', description: 'This is card 4' },
    { title: 'Card 5', description: 'This is card 5' },
    { title: 'Card 6', description: 'This is card 6' },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </section>
  );
};

export default CardSection;
