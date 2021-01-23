// Estructura del CRUD
const router = require('express').Router();
const {
  obtenerSucursal,
  crearSucursal,
  modificarSucursal,
  eliminarSucursal
} = require('../controllers/sucursales')
const auth = require('./auth');

router.get('/', auth.opcional, obtenerSucursal)
router.post('/', auth.opcional, crearSucursal)
router.put('/:razonSocial', auth.requerido, modificarSucursal)
router.delete('/:razonSocial', auth.requerido, eliminarSucursal)

module.exports = router;