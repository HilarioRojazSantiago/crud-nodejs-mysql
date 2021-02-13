const { v4: uuidv4 } = require('uuid');

class Mesa {
  constructor(num_Mesa,id_Pedido_actual) {
    this.num_Mesa = num_Mesa;
    this.id_Pedido_actual = id_Pedido_actual;
    this.id_Mesa = uuidv4();
  }

  get id_Pedido_actual() {return this._id_Pedido_actual};
  set id_Pedido_actual(newPedido) {this._id_Pedido_actual = newPedido;};

  get num_Mesa() {return this._num_Mesa};
  set num_Mesa(newMesa) {this._num_Mesa = newMesa;};

};


module.exports = Mesa;

/*

function Prueba_Mesa(){
  console.log("Estas en Mesa-----");
  var array = [
    new Mesa(1,5),
    new Mesa(2,3)
  ];

  list();
  console.log("------------------");
}

*/

/*class Mesa {
    constructor() {
        this.Mesa = [];
    }

    list() {
        console.log([...this.Mesa]);
        return [...this.Mesa];
    }

    crear(num_Mesa){
        let mesa = {
          num_Mesa : num_Mesa,
          id_Pedido_actual : null,
          id_Mesa : uuidv4(),
        }

        this.Mesa.push(mesa);
    }

    agregarP(num_Mesa,id_Pedido_actual) {
        let mesaFound = false;
        this.Mesa.forEach((mesa) => {
            if (mesa.num_Mesa === num_Mesa) {
                mesa.id_Pedido_actual = id_Pedido_actual;
                mesaFound = true;
                return;
            }
        });

        if (!mesaFound) {
            throw new Error('no se encontró la mesa: "${num_Mesa}"');
        }
    }

    modificar(num_Mesa,new_pedido) {
        let mesaFound = false;
        this.Mesa.forEach((mesa) => {
            if (mesa.num_Mesa === num_Mesa) {
                mesa.id_Pedido_actual = new_pedido;
                mesaFound = true;
                return;
            }
        });

        if (!mesaFound) {
            throw new Error('no se encontró la mesa: "${num_Mesa}"');
        }
    }

    eliminar(num_Mesa) {
        let mesaFound = false;
        this.Mesa.forEach((mesa) => {
            if (mesa.num_Mesa === num_Mesa) {
                mesa.id_Pedido_actual = null;
                mesaFound = true;
                return;
            }
        });

        if (!mesaFound) {
            throw new Error('no se encontró la mesa: "${num_Mesa}"');
        }
    }

}*/