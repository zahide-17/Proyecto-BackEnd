// Usuario.js
const mongoose = require('mongoose');                         //Importando mongoose.

const ListaDeseosSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
    idProducto:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Articulo',
    },
    email:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario',
    }
    }, { timestamps: true }
)

/*Devuelve la representacion de un usuario, solo datos publicos */
ListaDeseosSchema.methods.publicData = function(){
  return {
    id: this.id,
    idProducto: this.idProducto,
    email: this.email,
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("ListaDeseos", ListaDeseosSchema);