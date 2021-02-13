const { v4: uuidv4 } = require("uuid");


module.exports = class generarTicket {
    constructor(datos) {
        this.datos = datos;
        this.id = uuidv4();
    }

    verificarDatosTicket(pedido){
        if(pedido.length == 3){
            return true;
        }
        return false;
    }
}