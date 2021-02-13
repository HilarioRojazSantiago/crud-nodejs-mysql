const { v4: uuidv4 } = require("uuid");

class Usuario {
  constructor(user, contrasenia) {
    this.user = user;
    this.contrasenia = contrasenia;
    this.listaUsuarios = new Array();
    this.id = uuidv4();
  }

  get user() {
    return this._user;
  }
  set user(newUser) {
    this._user = newUser;
  }

  get contrasenia() {
    return this._contrasenia;
  }
  set contrasenia(newContrasenia) {
    this._contrasenia = newContrasenia;
  }

  crear_lista_usuarios(nombre, pass, lista){
    for(i in lista){
      lista[i].push(["nombre","pass"]);
    }
  }
}

module.exports = Usuario;
