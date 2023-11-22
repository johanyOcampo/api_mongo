const { response } = require('express');
const usuario = require('../models/usuario');

Usuario = require('../models/usuario')

const getUsuario = async (req, res) => {
    const usuario = await Usuario.find(); //OBTENER TODOS LOS DOCUMENTOS DE UNA COLECCION
    res.json({
        msg: usuario
    })
}

const postUsuario = async (req, res) => {

    const datos = req.body //CAPTURAR DATOS DE LA URL-POSTMAN
    let mensaje = 'Insercion exitosa'

    try {
        const usuario = new Usuario(datos) //INSTANCIAR
        await usuario.save() //GUARDAR EN LA BASE DE DATOS
        console.log(usuario)
        
    } catch (error) {

        mensaje = error
        console.log(error)

    }
    res.json({
        msg: mensaje
    })
}

const putUsuario = async (req, res) => {
    const {nombre, password, rol, estado} = req.query //DESESTRUCTURAR
    let mensaje = ''

    try {
        const usuario = await Usuario.findOneAndUpdate({nombre : nombre}, {password : password}, {rol : rol}, {estado : estado})
        mensaje = 'Actualizacion exitosa'
    } catch (error) {
        mensaje = error
    }
    res.json ({
        msg : mensaje
    })
}

const deleteUsuario = async (req, res) => {
    const {nombre} = req.query //DESESTRUCTURAR
    let mensaje = ''

    try {
        const usuario = await Usuario.findOneDelete ({nombre : nombre})
        mensaje = 'eliminacion exitosa'
    } catch (error) {
        mensaje = error
    }
    res.json ({
        msg : mensaje
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario,
}