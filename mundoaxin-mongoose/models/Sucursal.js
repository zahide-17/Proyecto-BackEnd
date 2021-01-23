// Usuario.js
const mongoose = require('mongoose');                         //Importando mongoose.

const SucursalSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
    nombre: {
      type: String,
      required: true,
      required:[true, "invalido"],
      match:[/^[a-zA-Z0-9]+$/, "es inválido"],
      },                              //Definiendo cada campo con su respectivo tipo de dato.
    email: {
      type: String,
      require:[true, "invalido"],
      unique: true,
      lowercase: true,
      index:true,
      },
    razonSocial:{type: String, enum:["Mundo Axin SA"]},
  },
  { timestamps: true }
)

/*Devuelve la representacion de un usuario, solo datos publicos */
SucursalSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
    email: this.email,
    razonSocial: this.razonSocial,
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("Sucursal",SucursalSchema);