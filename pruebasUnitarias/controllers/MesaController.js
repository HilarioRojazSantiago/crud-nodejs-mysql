const Mmesa = require("../models/Mesa");


class MesaController {
    constructor() {
        this.Mesa= new Array();
    }

    list() {
        console.log([...this.Mesa]);
        return [...this.Mesa];
    }

    crear(num_Mesa){
        let mesa = new Mmesa(num_Mesa,null);
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
            throw new Error('no se encontró la mesa: '+num_Mesa);
        }else{ return mesaFound; }
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
            throw new Error('no se encontró la mesa: '+num_Mesa);
        }else{ return mesaFound; }
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
            throw new Error('no se encontró la mesa: '+num_Mesa);
        }else{ return mesaFound; }
    }

    imprimeMesa(num_Mesa) {
        let mesaFound = false;
        this.Mesa.forEach((mesa) => {
            if (mesa.num_Mesa === num_Mesa) {
                console.log(' ( _num_Mesa: ['+ mesa.num_Mesa +']  _id_Pedido_actual:  ['+ mesa.id_Pedido_actual +']  )');
                mesaFound = true;
                return;
            }
        });

        if (!mesaFound) {
            throw new Error('no se encontró la mesa: '+num_Mesa);
        }else{ return mesaFound; }
    }

}

module.exports = MesaController;

/*
    crear(num_Mesa){
        let mesa = {
          num_Mesa : num_Mesa,
          id_Pedido_actual : null,
          id_Mesa : uuidv4(),
        }

        this.Mesa.push(mesa);
    }
*/