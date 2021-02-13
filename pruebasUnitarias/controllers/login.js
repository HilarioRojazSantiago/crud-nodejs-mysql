const { v4: uuidv4 } = require('uuid');

module.exports = class login{

    constructor(){
        
        this.id = uuidv4();
    }

    verificarUsuario(usuario, contra){
        if(usuario == "admin" && contra == "123aBc"){
            return true;
        }
        return false;
    }
};
