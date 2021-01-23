// Usuario.js
const mongoose = require('mongoose');                         //Importando mongoose.

const ProductoSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
    nombre: {
      type: String,
      required: true,
      required:[true, "invalido"],
      match:[/^[a-zA-Z0-9]+$/, "es inválido"],
      },                              //Definiendo cada campo con su respectivo tipo de dato.
    marca: {type: String},
    imagen:[String],
    idCategoria: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Categoria',
    },
    idProducto: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'Articulo',
    },
  },
  { timestamps: true }
)

/*Devuelve la representacion de un usuario, solo datos publicos */
ProductoSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    marca: this.marca,
    imagen: this.imagen,
    idCategoria: this.idCategoria,
    idProducto: this.idProducto,
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("Producto",ProductoSchema);

