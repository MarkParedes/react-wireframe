const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Datos para el ejemplo
const datos = [
  { id: 1, title: 'Antigüedad', description: 'La antigüedad influye en la percepción del valor.', image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/A1awv11NlOteVpJ7/generated/generated-AQEy782EBpFvJnry.png' },
  { id: 2, title: 'Tamaño', description: 'El tamaño afecta el valor de la propiedad.', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMHZhbHVhdGlvbnxlbnwwfHx8fDE3MzI0OTQ3NjN8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=503&h=360' },
  { id: 3, title: 'Ubicación', description: 'La ubicación determina el acceso y la demanda local.', image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/A1awv11NlOteVpJ7/generated/generated-YrDlp1pp9kc8Nzlk.png' },
  { id: 4, title: 'Servicios Cercanos', description: 'La proximidad a servicios mejora la conveniencia y lo vuelve más atractivo.', image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=360,fit=crop/A1awv11NlOteVpJ7/generated/generated-YNqyjOKRL9U0G1b9.png' },
];

// Endpoint para obtener datos
app.get('/api/factores', (req, res) => {
  try {
    res.status(200).json(datos);
  } catch (error) {
    console.error('Error al obtener los factores:', error);
    res.status(500).json({ message: 'Error al obtener los datos.' });
  }
});

// Manejar rutas no definidas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada.' });
});

// Puerto de escucha
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
