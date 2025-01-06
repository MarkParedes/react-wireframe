import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
      <form className="w-80 bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Usuario</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Entrar</button>
        <p className="mt-4 text-sm text-center">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Regístrate aquí
          </Link>
        </p>
        <p className="mt-4 text-sm text-center">
          ¿Eres administrador?{' '}
          <Link to="/loginAdmin" className="text-blue-500 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
