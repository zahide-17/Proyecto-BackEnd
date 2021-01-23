/*Es el punto de entrada de la aplicacion donde declaramos las rutas e inicializamos el servidor */
var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to mundoaxin api');
});

router.use('/sucursales',require('./sucursales'));
router.use('/usuarios',require('./usuarios'));
router.use('/tiendas',require('./tiendas'));
router.use('/productos',require('./productos'));
router.use('/listasDeseos',require('./listasDeseos'));
router.use('/categorias',require('./categorias'));
router.use('/articulos',require('./articulos'));

module.exports = router;



