const { v4: uuidv4 } = require('uuid');

class Producto {
  constructor(nombre, costo, imagen = '', disponible = true) {
    this.nombre = nombre;
    this.costo = costo;
    this.imagen = imagen;
    this.disponible = disponible;
    this.id = uuidv4();
  }

  // Getters y Setters
  get nombre() {return this._nombre};
  set nombre(newName) {this._nombre = newName;};

  get costo() {return this._costo};
  set costo(newCosto) {this._costo = newCosto;};

  get imagen() {return this._imagen;};
  set imagen(newImagen) {this._imagen = newImagen;};

  get disponible() {return this._disponible;};
  set disponible(newDisponible) {this._disponible = newDisponible;};

  // Metodos
  modificar(nombre = '', imagen = '', disponible = true){
    if(nombre == ''){
      return false;
    }

    this._nombre = nombre;
    this._imagen = imagen;
    this._disponible = disponible;

    return true;
  }

  modificarCosto(nCosto = undefined) {
    if(nCosto == undefined){
      return false;
    } else {
      this.costo(nCosto);
      return true;
    }
  }

};

module.exports = Producto;