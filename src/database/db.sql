---creating DB
CREATE DATABASE crudnodejsmysql;

---using DB
use crudnodejsmysql;

---creating table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

---to show tables
SHOW TABLES;

---to describe table
describe customer;