import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Logo</div>
      <ul className="flex space-x-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
