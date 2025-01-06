import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardSection from './components/CardSection';
import CardSectionFactores from './components/CardSectionFactores';
import CircleSection from './components/CircleSection';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LoginAdminPage from './pages/LoginAdminPage'; // Importa el componente de login de administrador

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HeroSection /><CardSection /><CardSectionFactores /><CircleSection /></>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loginAdmin" element={<LoginAdminPage />} /> {/* Ruta para login de administrador */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
