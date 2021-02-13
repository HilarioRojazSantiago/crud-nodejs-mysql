const http = require("http");
const Mesa = require("./models/Mesa");
const Producto = require('./models/producto');
const Usuario = require('./models/Usuario');
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("Pruebas mostradas desde consola");

});

server.listen(port, hostname, () => {
  console.log(`Server running @ http://${hostname}:${port}/`);

});