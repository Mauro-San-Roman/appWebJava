const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mensajes.controller.js');

// Definición de endpoints para Mensajes
router.get('/', ctrl.obtenerMensajes);
router.post('/', ctrl.crearMensaje);
router.delete('/:id', ctrl.borrarMensaje);
router.put('/:id', ctrl.modificarMensaje);

module.exports = router;