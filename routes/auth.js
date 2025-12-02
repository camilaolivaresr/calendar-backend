// Rutas de Usuarios
// host = /api/auth
const {Router} = require('express');
const {check} = require('express-validator')
const router = Router();

// router.get('/', (req, res) => {
//     console.log('se requiere /')
//     res.json({
//         ok: true
//     })
// });

const {newUsuario, loginUsuario, renewUsuario} = require('../controllers/auth');
const { validarCampos } = require('../middleware/validators');

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

router.get(
    '/renew',
    [

    ],
    renewUsuario 
); 


module.exports = router;