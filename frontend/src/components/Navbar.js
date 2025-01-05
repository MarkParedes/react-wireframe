import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Logo</div>
      <ul className="flex space-x-4">
        <li><a href="#section1">Inicio</a></li>
        <li><a href="#section2"></a>Contacto</li>
        <li><a href="#section3">Iniciar sesion</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
