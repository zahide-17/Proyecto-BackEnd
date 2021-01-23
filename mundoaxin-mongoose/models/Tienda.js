// Tienda.js
const mongoose = require('mongoose');                         //Importando mongoose.

const TiendaSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
    nombre: {
      type: String,
      required: true,
      required:[true, "invalido"],
      match:[/^[a-zA-Z0-9]+$/, "es inválido"],
      },                              //Definiendo cada campo con su respectivo tipo de dato.
      ubicacion: { type: String },
  },
  { timestamps: true }
)

/*Devuelve la representacion de un usuario, solo datos publicos */
TiendaSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    ubicacion: this.ubicacion,
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("Tienda",TiendaSchema);