const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioRouter='/api/usuarios';
        //Middleware
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        this.app.use(cors())
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usuarioRouter,require('../routes/user.route'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
}
module.exports = Server;