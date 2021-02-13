class Menu {
  constructor(){
    this.productos = new Array();
  }

  // Getters/Setters
  get productos() { return this._productos; };
  set productos(newProd) { this._productos = newProd; };

  // Metodos
  addProducto(nProducto) {
    this.productos.push(nProducto);
  };

  addProductos(nProductos) {
    for(var n = 0 ; n<nProductos.length ; n++){
      this._productos.push(nProductos[n]);
    }
  }

  modificarProducto(id, campo, valor) {
    for(var n = 0 ; n < this._productos.length ; n++){
      if(id == undefined || campo  == undefined || valor == undefined){
        return false;
      }

      if(this._productos[n].id == id){
        this._productos[n][campo] = valor;

        return true;
      }

      return false;
    }
  }

  eliminarProducto(id){
    if(id == undefined){
      return false;
    }

    for(var n=0 ; n<this._productos.length ; n++){
      if(this._productos[n].id == id){
        this._productos.splice(n, 1);
        
        return true
      }
    }

    return false;
  }

};

module.exports = Menu;