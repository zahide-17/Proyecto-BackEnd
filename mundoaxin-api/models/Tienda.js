// Tienda.js
/** Clase que representa las Tiendas*/
class Tienda {

    constructor(idTienda,nombre,ubicacion) {
        this.idTienda = idTienda; //Identidicador unico de cada Tienda registrada
        this.nombre = nombre; //Nombre de la tienda
        this.ubicacion = ubicacion; //Ubicacion de la Tienda
    }
}

module.exports = Tienda;