const {router} = require('express');
const {validatorJWT} = require('../middleware/validar-jwt')
const {getEvents,createEvents,updateEvents,deleteEvents} = require('../controllers/events')

router.get('/',validatorJWT, getEvents);

router.post('/',validatorJWT ,createEvents);

router.put('/:id',validatorJWT ,updateEvents);

router.delete('/',validatorJWT ,deleteEvents);

module.exports = router;