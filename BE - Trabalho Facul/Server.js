const app = require('./app')

require('dotenv').config()


const http = require('http');

const port=  8080 || process.env.MYSQL_PORT;

const server = http.createServer(app);

server.listen(port)