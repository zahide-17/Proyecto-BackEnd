// Usuario.js
const mongoose = require('mongoose');                         //Importando mongoose.
const uniqueValidator = require("mongoose-unique-validator"); //Importando módulo mongoose-unique-validator, pendiente de instalar.
const crypto = require('crypto');                             //Importando módulo crypto, pendiente de instalar.
const jwt = require('jsonwebtoken');                          //Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config').secret;

const UsuarioSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
  username: {                                                  //Definiendo cada campo con sus tipo sde datos y validaciones.
    type: String,
    unique: true, //este campo no se puede repetir
    lowercase: true,
    required: [true, "no puede estar vacío"],
    match: [/^[a-zA-Z0-9]+$/, "es inválido"],
    index: true,
  },
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
    fechaNac: {type: String, require:true},
    password: {type: String, required:true},
    genero: {type: String,enum:["F","M"] },
    ciudad: {type: String, require :true},
    razonSocial:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sucursal'
    },
    hash: String, //este campo se utilizará para la sesión
    salt: String, //este campo se utilizará para la sesión
  },
  { timestamps: true }
);

//USando plugin de validacion para que no se repitan correos ni usernames
UsuarioSchema.plugin(uniqueValidator,{message:"El usuario ya existe"});

UsuarioSchema.methods.crearPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex"); //generando na "sal" random para cada usuario
  this.hash = crypto
  .pbkdf2Sync(password,this.salt,10000,512,"sha512")
  .toString("hex");//generando un hash utilizando la sal
};

/*Recibe el password, genera y compara el has con el de la base de datos*/
UsuarioSchema.methods.validarPassword = function (password) {
  const hash = crypto
  .pbkdf2Sync(password,this.salt,10000,512,"sha512")
  .toString("hex");
  return this.hash === hash;
};

UsuarioSchema.methods.generarJWT = function() {
  const today = new Date();
  const exp = new Date();
  exp.setDate(today.getDate() + 60); //60 dias antes de expirar

  return jwt.sign({
    id: this.id,
    username: this.username,
    exp: parseInt(exp.getTime()/1000),
  },secret);
};

/*Devuelve la representacion de un usuario despues de autentificar */

UsuarioSchema.methods.toAuthJSON = function (){
  return {
    username: this.username,
    email: this.email,
    token: this.generarJWT()
  };
};

/*Devuelve la representacion de un usuario, solo datos publicos */
UsuarioSchema.methods.publicData = function(){
  return {
    id: this.id,
    username: this.username,
    nombre: this.nombre,
    email: this.email,
    genero: this.genero,
    fechaNac: this.fechaNac,
    ciudad: this.ciudad,
    razonSocial: this.razonSocial,
    createdAT: this.createdAT,
    updatedAt: this.updatedAt
  };
};
/*Define el modelo Usuario, utilizando el esquema UsuarioSchema*/
mongoose.model("Usuario",UsuarioSchema);