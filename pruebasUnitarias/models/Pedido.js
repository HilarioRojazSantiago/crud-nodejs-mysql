const { v4: uuidv4 } = require("uuid");
class Pedido {
  constructor(estado, total) {
    this.estado = estado;
    this.total = total;
    this.id = uuidv4();
  }

  get estado() {
    return this._estado;
  }
  set estado(newEstado) {
    this._estado = newEstado;
  }

  get total() {
    return this._total;
  }
  set total(newTotal) {
    this._total = newTotal;
  }
}
