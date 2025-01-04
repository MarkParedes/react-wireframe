import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardSection from './components/CardSection';
import CardSectionFactores from './components/CardSectionFactores';
import CircleSection from './components/CircleSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CardSection/>
      <CardSectionFactores/>
      <CircleSection/>
      <Footer />
    </div>
  );
};

export default App;

