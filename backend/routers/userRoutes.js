const express = require('express');
const { protect } = require('../middleware/authMiddleware'); // Importa el middleware
const User = require('../models/User');

const router = express.Router();

router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Encuentra al usuario actual
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil' });
  }
});

module.exports = router;
