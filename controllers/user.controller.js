const {response }=require('express');

const usuariosGet =(req, res=response) => {
    const params=req.query;
    const {nombre='No nombre',apellido='No apellido',edad=-1}=req.query;
    res.json(
        {
            ok:true,
            nombre,
            apellido,
            edad,
            params
        })
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
    const id=req.params.id;
    if(id=="1"){// si encontre id
        res.status(200).json({id:id,msj:'put api'})
    }else{//sino encontre
        res.status(404).json({id:id,msj:'no encontrado'})
    }
    
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