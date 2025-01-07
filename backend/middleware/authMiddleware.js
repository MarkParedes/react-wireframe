const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer')) {
    try {
      token = token.split(' ')[1]; // Elimina la palabra "Bearer"
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token
      req.user = decoded; // Agrega los datos del usuario al request
      next(); // Pasa al siguiente middleware
    } catch (error) {
      res.status(401).json({ message: 'Token no válido' });
    }
  } else {
    res.status(401).json({ message: 'No hay token, no autorizado' });
  }
};

module.exports = protect;
