const {Router} = require('express');
const {validatorJWT} = require('../middleware/validar-jwt')
const {getEvent,createEvent,updateEvent,deleteEvent} = require('../controllers/events')

const router = Router();
//todas las rutas estan protejidas  por el JWT
router.use(validatorJWT);

router.get('/', getEvent);

router.post('/' ,createEvent);

router.put('/:id' ,updateEvent);

router.delete('/:id' ,deleteEvent);

module.exports = router;