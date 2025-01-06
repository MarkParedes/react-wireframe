import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Registro</h1>
      <form className="w-80 bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Usuario</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Crea un usuario"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Crea una contraseña"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Confirma Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Confirma tu contraseña"
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Registrar</button>
        <p className="mt-4 text-sm text-center">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
