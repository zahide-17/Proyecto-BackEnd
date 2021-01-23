/*Para configurar autorizaciones sobre los distintos endpoints de nuestro proyecto,
crearemos 2 middlewares en este archivo, estos permiten decodificar el codigo JWT*/

const jwt = require('express-jwt');
const secret = require('../config').secret;

/*Esta funcion utilizara los dos middlewares para extraes el token del
  header de Autorization de una peticion http */

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
    req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}
/*El middleware requerido se utilizara para endpoints donde se requiera tener una sesion
  El middleware opcinal donde no sean necesarios

  La propiedad userProperty es donde vendra el JWT descifrado y que pondremos utilizar en
  el objeto request por medio de req.usuario*/

const auth = {
  requerido: jwt({
    secret: secret,
    algorithms: ['HS256'],
    userProperty: 'usuario',
    getToken: getTokenFromHeader
  }),
  opcional: jwt({
    secret: secret,
    algorithms: ['HS256'],
    userProperty: 'usuario',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;