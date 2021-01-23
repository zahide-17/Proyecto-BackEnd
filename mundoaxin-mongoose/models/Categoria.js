// Usuario.js
const mongoose = require('mongoose');                         //Importando mongoose.

const CategoriaSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
    //*****Debo poner un id aparte del que genera  */
    nombre: {
      type:String,
      enum:[labial,sombras,contorno,rubor]
    },                              //Definiendo cada campo con su respectivo tipo de dato.
  },
  { timestamps: true }
)

/*Devuelve la representacion de un usuario, solo datos publicos */
CategoriaSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombre: this.nombre,
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("Categoria",CategoriaSchema);
