const express = require('express')
const cors = require ('cors') //IMPLEMNTAR SEGURIDAD
const bodyParser = require('body-parser') // PAQUETE PARA CONVERTIR EL OBEJTO ENVIADO DESDE EL FORMULARIOO
const { dbConection } = require('../database/config')


class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/usuario' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }

    middlewares(){
        this.app.use (cors()); //IMPLEMNTAR EL USO DEL CORS
    }


    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'))
    }


    middlewares(){
        this.app.use(cors() ); //INDICAR EL USO DE CORS
        this.app.use(bodyParser.json()) //PARSEAR OBJETO A INSERTAR EN LA DB
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase