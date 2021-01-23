// Usuario.js
const mongoose = require('mongoose');                         //Importando mongoose.

const ArticuloSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
    nombreProd: {
      type: String,
      required: true,
      },                              //Definiendo cada campo con su respectivo tipo de dato.
    marca:{type: String},
    precio:{type: String, required:true},
    descripcion:{type: String, required:true},
    imagen:[String],
    idTienda:{
        type: mongoose.Schema.Types.ObjectId,
        required:true, ref:
        'Tienda'
    },
    idCategoria:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Categoria'
    },
  },
  { timestamps: true }
)

/*Devuelve la representacion de un usuario, solo datos publicos */
ArticuloSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombreProd: this.nombreProd,
    marca: this.marca,
    precio: this.precio,
    descripcion: this.descripcion,
    imagen: this.imagen,
    idTienda: this.idTienda,
    idCategoria: this.idCategoria
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("Articulo",ArticuloSchema);