// ListaDeseos.js
/** Clase que representa guardar un producto en la sesion del usuario*/
class ListaDeseos {

    constructor (email,idProducto) {
        this.email = email; //Correo para Guardar el producto elegido
        this.idProducto = idProducto; // id del producto a guardar
    }
}

module.exports = ListaDeseos;