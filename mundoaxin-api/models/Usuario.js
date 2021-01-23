// Usuario.js
/** Clase que representa un usuario a registrarse */
class Usuario {

    constructor(email, nombre, fechaNac, ciudad, genero, password, razonSocial) {
      this.email = email; //Correo electronico del usuario
      this.nombre = nombre; //Nombre del usuario
      this.fechaNac = fechaNac; //Fecha de Nacimiento del usuario
      this.ciudad = ciudad; //Lugar donde radica el usuario
      this.genero = genero; //Genero del usuario
      this.password = password; //Password encriptado para identificar al usuario
      this.razonSocial = razonSocial; //Razon social de Mundo Axin al que pertenece el usuario
    }

  }

  module.exports = Usuario;