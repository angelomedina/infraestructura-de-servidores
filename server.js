require('dotenv').config();

const http = require('http');
const app = require('./app');

//Configuración del servidor
const port = process.env.PORT;
const host = process.env.HOST;
const server = http.createServer(app);

//Mensaje de que el servidor está iniciado
server.listen(port, () => {
    console.log(`[El servidor está corriendo en la dirección '${host}:${port}']`);
});