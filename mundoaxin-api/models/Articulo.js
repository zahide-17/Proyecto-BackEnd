// Articulo.js
/** Clase que representa los articulos/productos que tiene una Tienda*/
class Articulo {

    constructor(idProducto, nombreProd,marca,precio,descripcion,imagen,idTienda,idCategoria) {
        this.idProducto = idProducto;//Identificador unico de cada producto
        this.nombreProd = nombreProd; //Nombre del producto o articulo
        this.marca = marca;//Marca a la que pertenece un producto
        this.precio = precio;//Precio del producto
        this.descripcion = descripcion;//Caracteristicas mas importantes del producto
        this.imagen = imagen;//Imagen del producto
        this.idTienda = idTienda;// Identificador de la tienda al que pertenece el producto
        this.idCategoria = idCategoria;// Categoria a la que pertenece el producto
    }
}

module.exports = Articulo;