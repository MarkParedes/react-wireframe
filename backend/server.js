const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Cargar configuración
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Modelo de usuario
const User = require('./models/userModel');

// Rutas de autenticación
app.post('/auth/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validaciones básicas
    if (!username || !password || !role) {
      return res.status(400).json({ message: 'Faltan datos requeridos' });
    }

    // Crear usuario
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validaciones básicas
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Respuesta de éxito
    res.status(200).json({ message: 'Inicio de sesión exitoso', role: user.role });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

// Puerto de escucha
const PORT = process.env.AUTH_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor de autenticación corriendo en http://localhost:${PORT}`);
});

