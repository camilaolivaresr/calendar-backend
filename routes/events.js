const {Router} = require('express');
const {check} = require('express-validator');

const {isDate} = require('../helpers/isDate');
const {validarCampos} = require('../middleware/validators');
const {validatorJWT} = require('../middleware/validar-jwt');
const {getEvent,createEvent,updateEvent,deleteEvent} = require('../controllers/events');

const router = Router();
//todas las rutas estan protejidas  por el JWT
router.use(validatorJWT);

router.get('/', getEvent);

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Ingresa fecha de inicio').custom(isDate),
        check('end', 'Ingresa fecha de finalizacion').custom(isDate),
        validarCampos
    ],
    createEvent
);

router.put('/:id' ,updateEvent);

router.delete('/:id' ,deleteEvent);

module.exports = router;