const {Router} =require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/user.controller');
const router = Router();

router.get('/', usuariosGet);
router.post('/', usuariosPost)
router.put('/:id',usuariosPut)//para los parametros hay que colocar los puntos y nombre del parametro deseado
router.patch('/',usuariosPatch)
router.delete('/',usuariosDelete)


module.exports=router;