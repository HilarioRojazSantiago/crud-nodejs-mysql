var assert = require('assert');
//clases del  proyecto
const Producto = require('../models/producto');
const Usuario = require('../models/Usuario');
const Mesa = require("../models/Mesa");
const MPedido = require("../models/Pedido");
const Menu = require('../controllers/MenuController');
const Login = require('../controllers/login');
const GenerarTicket = require('../controllers/generarTicket');
const CMesa = require('../controllers/MesaController');
const Pedido = require('../controllers/PedidoController');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is no present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    })
  });
});

describe('Pruebas Unitarias', function() {
  // Puebas para el modelo de Producto
  describe('Modelo Platillo', function() {
    // Prueba para crear una nueva clase de platillo
    it('crea un nuevo platillo para el menu', function() {
        var productoPrueba = new Producto("pollo con mole", 40.0);

      //prueba array.length, con la salida esperada 5
      assert.equal(productoPrueba.nombre, "pollo con mole");
    });

    // Prueba para crear una lista de productos
    it('crea una lista con productos', function() {
      var array = [
        new Producto("pollo con mole", 40.0),
        new Producto("Enfrijoladas sencillas", 25.0),
        new Producto("Orden de picadas", 15.0),
        new Producto("Orden de sincronizadas", 15.0),
        new Producto('Filete de pescado', 30.0)
        ];

      //prueba array.length, con la salida esperada 5
      assert.equal(array.length, 5);
    });

    // Prueba para modificar los datos de un producto
    it('Modifica los datos de un producto', function() {
      var productoPrueba = new Producto("pollo con mole", 40.0);

      // modifica el nombre del platillo
      assert.equal(productoPrueba.modificar('pollo sin mole'), true);
      // no inserta argumentos a la funcion
      assert.notEqual(productoPrueba.modificar(),  true);
    });
  });

  // Pruebas para el modelo de usuario
  describe('Modelo Usuario', function() {
    // Crea un nuevo usuario
    it('Crea un nuevo usuario', function() {
      assert.notEqual(new Usuario("Ruben", "Ald3r3t397"), undefined);
    }); 

    // Crea una lista de usuarios
    it('Crea una lista de usuarios', function() {
      var array2 = [
        new Usuario("Ruben", "Ald3r3t397"),
        new Usuario("Anderson", "Alderete17"),
      ];
     
      assert.notEqual(array2, undefined);
    });
  });

  //pruebas para el login
  describe('Controlador Login', function(){
    it('PU_RF12: Se verifica si los datos del usuario coinciden con la lista de usuarios', function(){
      var nuevo = new Login();
      assert.equal(nuevo.verificarUsuario("admin", "123aBc"), true);
    });
  });

  //pruebas para generar ticket
  describe('Controlador Generar Ticket', function(){
    it('PU_RF10-1 Se verifica que los datos del ticket son correctos', function(){
      var tick = new GenerarTicket();
      var pedido = [
        "productos",
        "1200",
        "PAGADO",
      ];

      assert.equal(tick.verificarDatosTicket(pedido),true);
    });
  });

  // Pruebas para el modelo Mesa
  describe('Modelo Mesa', function() {
    // Crea una mesa con un pedido
    it('PU_RF7:se crean las mesas para asociar un pedido desde el Modelo', function(){
      var mesa = [
        new Mesa(1,null),
        new Mesa(2,null),
        new Mesa(3,null),
        new Mesa(4,null),
      ];

      //mesa.modificar(1,9);
      //mesa.eliminar(3);
      assert.equal(mesa.length, 4);
      //assert.notEqual(mesa, undefined);
    });
  });

  // Pruebas para el controlador de Mesa
  describe('Controlador Mesa', function() {
    var Mprueba = new CMesa();
    // Crea una mesa 
    it('PU_RF7:se crean las mesas para asociar un pedido desde el controlador', function(){
      Mprueba.crear(1);
      Mprueba.crear(2);
      Mprueba.crear(3);
      Mprueba.crear(4);
      Mprueba.list();
      assert.notEqual(Mprueba, undefined);
    });
    //asocia un pedido
    it('PU_RF7:se asocia un pedido desde el controlador a una mesa existente', function(){
      Mprueba.agregarP(1,3);
      Mprueba.agregarP(2,6);
      Mprueba.agregarP(3,1);
      Mprueba.agregarP(4,9);
      //Mprueba.list();
      assert.notEqual(Mprueba.length, 4);
    });
    //modifica el pedido de una mesa
    it('PU_RF8:se modifica el número de pedido asociado a una mesa existente', function(){
      var res = Mprueba.modificar(1,12);
      //Mprueba.imprimeMesa(1);
      assert.equal(res, true);
    });
    //no permite modificar una mesa no existente
    it('PU_RF8:debe fallar al intentar modificar una mesa no existente', function(){
      const expectedError = new Error("no se encontró la mesa: 7");

        assert.throws(() => {
            Mprueba.modificar(7,12);
        }, expectedError);
    });
    //elimina el pedido de una mesa
    it('PU_RF9:se elimina el número de pedido asociado a una mesa existente', function(){
      var res = Mprueba.eliminar(1);
      //Mprueba.imprimeMesa(1);
      assert.equal(res, true);
    });
    //imprimen la lista de mesas
    it('PU_RF9:se imprimen los datos de las mesas', function(){
      Mprueba.list();
      assert.notEqual(Mprueba.length, 4);
    });
  });


  // Pruebas para el controlador Menu
  describe('Controlador Menu', function() {
    var menuPrincipal = new Menu();

    // Agrega solo un producto al menu
    it('PU_RF1-1: Agrega nuevos productos al menu', function() {
      var productoNuevo = new Producto('Pollo con Mole', 40.0);

      menuPrincipal.addProducto(productoNuevo);

      assert.equal(menuPrincipal.productos.length, 1);
    });

    // Agrega una lista de productos al menu
    it('PU_RF1-1: Agrega varios productos al menu', function() {
      var variosProductos = [
        new Producto('Tacos dorados', 25.0),
        new Producto('Enfrijoladas', 30.0),
        new Producto('Vaso de agua de jamaica', 10.0),
        new Producto('vaso de agua simple', 10.0),
        new Producto('boing de uva', 10.0)
      ];

      menuPrincipal.addProductos(variosProductos);

      assert.equal(menuPrincipal.productos.length, 6);
    });

    it('PU_RF2: Modifica infromacion de un producto', function() {
      var id = menuPrincipal.productos[0].id;

      var result = menuPrincipal.modificarProducto(id, 'nombre', 'Pollo sin mole');
      assert.equal(result, true);
    });

    it('PU_RF2: Trata de modificar un producto que no existe', function() {
      var result = menuPrincipal.modificarProducto(1234, 'nombre', 'nada');
      assert.equal(result, false);
    });

    it('PU_RF3: Elimina un producto de la lista del menu', function() {
      var id = menuPrincipal.productos[0].id;
      var result = menuPrincipal.eliminarProducto(id);
      assert.equal(result, true);
    });
  });



   // Pruebas para el controlador Pedido
  describe('Controlador Pedido', function() {
    var pedidonew = new Pedido();

    // Agrega solo un producto al Pedido
    it('PU_RF4: Agrega nuevos productos al Pedido', function() {
      var productoNuevo = new Producto('Pollo con Mole', 40.0);

      pedidonew.addProducto(productoNuevo);

      assert.equal(pedidonew.productos.length, 1);
    });

    // Agrega una lista de productos al pedido
    it('PU_RF4-1: Agrega varios productos al pedido', function() {
      var variosProductos = [
        new Producto('Tacos dorados', 25.0),
        new Producto('Enfrijoladas', 35.0),
        new Producto('Vaso de agua de jamaica', 10.0),
        new Producto('vaso de agua simple', 10.0),
        new Producto('boing de uva', 10.0)
      ];

      pedidonew.addProductos(variosProductos);
      assert.equal(pedidonew.productos.length, 6);
    });   


  // Agregar estado al producto
  it('PU_RF4-2: Se le podrá asignar algún estado', function() {
    var variosProductos = [
      new Producto('Tacos dorados', 25.0),
      new Producto('Enfrijoladas', 35.0),
      new Producto('Vaso de agua de jamaica', 10.0),
      new Producto('vaso de agua simple', 10.0),
      new Producto('boing de uva', 10.0)
    ];

    pedidonew.EstadoEnProceso(variosProductos);
    assert.equal(pedidonew.productos.length, 11);
  }); 


    // Agrega una lista de productos al pedido
    it('PU_RF4-3: Se mostrará el costo total de los productos agregados', function() {
      var variosProductos = [
        new Producto('Tacos dorados', 25.0),
        new Producto('Enfrijoladas', 35.0),
        new Producto('Vaso de agua de jamaica', 10.0),
        new Producto('vaso de agua simple', 10.0),
        new Producto('boing de uva', 10.0)
      ];

      pedidonew.cuentaT(variosProductos);
      assert.equal(pedidonew.productos.length, 16);
    }); 

  
  });

});