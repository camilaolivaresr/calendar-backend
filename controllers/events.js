const { response } = require('express')


const getEvent = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'obtener eventos'
    })
}

const createEvent = (req, res = response) => {
    console.log(req.body);

    res.json({
        ok: true,
        msg: 'crear eventos'
    })
}


const updateEvent = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'actualizar eventos'
    })
}


const deleteEvent = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'borrar eventos'
    })
}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}