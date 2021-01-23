// Producto.js
/** Clase que representa un producto*/
class Producto {

    constructor(nombreProducto, marca, imagen, idCategoria, idProducto){
        this.nombreProducto = nombreProducto; //Nombre del producto
        this.marca = marca; //Marca a la que pertenece el producto
        this.imagen = imagen; //Imagen del producto
        this.idCategoria = idCategoria; // Categoria a la que pertenece el producto
        this.idProducto = idProducto; // Id del producto
    }
}

module.exports = Producto;