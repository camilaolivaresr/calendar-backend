// Rutas de Usuarios
// host = /api/auth
const {Router} = require('express');
const {check} = require('express-validator')
const router = Router();

const {newUsuario, loginUsuario, renewUsuario} = require('../controllers/auth');
const { validarCampos } = require('../middleware/validators');
const { validatorJWT } = require('../middleware/validar-jwt');



router.post(
    '/new',
    [ 
        check('name', 'El nombre es obligatorio').not().isEmpty().isLength({min: 3}),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de tener 6 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    newUsuario
 );

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de tener 6 caracteres').isLength({min: 6}),
        validarCampos
    ],    
    loginUsuario
); 

router.get('/renew',validatorJWT, renewUsuario ); 


module.exports = router;