const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routers/userRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de mi aplicación!');
});

// Rutas
app.use('/api/users', userRoutes);

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Llama a la conexión
connectDB();

// Cambia el puerto aquí
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
