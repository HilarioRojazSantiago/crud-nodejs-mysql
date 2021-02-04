CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;


CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

CREATE TABLE platillo(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price VARCHAR(50) NOT NULL,
   available VARCHAR(10)
);

CREATE TABLE pedido(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_mesa INT(6),
    productos VARCHAR(200) NOT NULL,
    estado VARCHAR(500) NOT NULL,
    total VARCHAR(20)
);


describe customer;
describe platillo;
describe pedido;