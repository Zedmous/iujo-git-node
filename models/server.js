const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

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
        this.app.get('/api', (req, res) => {
            res.json({ok:true,msj:'get api'})
        });
        this.app.post('/api', (req, res) => {
            res.status(201).json({ok:true,msj:'post api'})
        })
        this.app.put('/api', (req, res) => {
            res.status(500).json({ok:true,msj:'put api'})
        })
        this.app.delete('/api', (req, res) => {
            res.json({ok:true,msj:'delete api'})
        })
        this.app.patch('/api', (req, res) => {
            res.json({ok:true,msj:'patch api'})
        })
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
}
module.exports = Server;