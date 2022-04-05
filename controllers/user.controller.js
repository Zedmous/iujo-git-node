const {response }=require('express');

const usuariosGet =(req, res=response) => {

    res.json({ok:true,msj:'get api'})
}

const usuariosPost =(req, res) => {
    const body=req.body;
    const {bankai}=req.body;
    res.status(201).json({
        msj:'put api',
        bankai,
        capitan:body.capitan
    })
}
const usuariosPut = (req, res) => {
    res.status(500).json({ok:true,msj:'put api'})
}
const usuariosDelete = (req, res) => {
    res.json({ok:true,msj:'delete api'})
}
const usuariosPatch = (req, res) => {
    res.json({ok:true,msj:'patch api'})
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}