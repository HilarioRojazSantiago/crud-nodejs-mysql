class Pedido {
  constructor() {
    this.productos = new Array();
  }

  // Getters/Setters
  get productos() {
    return this._productos;
  }
  set productos(newProd) {
    this._productos = newProd;
  }

  // Metodos
  addProducto(nProducto) {
    this.productos.push(nProducto);
    //console.log("Total a pagar ..... $", nProducto._costo);
  }

  addProductos(nProductos) {
    for (var n = 0; n < nProductos.length; n++) {
      this._productos.push(nProductos[n]);
    }
  }

  cuentaT(nProductos) {
    let cuenta = 0.0;
    for (var n = 0; n < nProductos.length; n++) {
      this._productos.push(nProductos[n]);

      cuenta += nProductos[n]._costo;
    }
    console.log("Total cuenta: ", cuenta);
  }

  EstadoEnProceso(nProductos) {
    let cuenta = 0.0;
    let estado = "";
    for (var n = 0; n < nProductos.length; n++) {
      this._productos.push(nProductos[n]);

      cuenta += nProductos[n]._costo;
    }
    estado = "preparando";
    console.log("Total cuenta: ", cuenta);
    console.log(estado);
  }
}

module.exports = Pedido;
