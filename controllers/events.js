const { response } = require('express')


const getEvents = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'obtener eventos'
    })
}

const createEvents = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'crear eventos'
    })
}


const updateEvents = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'actualizar eventos'
    })
}


const deleteEvents = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'borrar eventos'
    })
}

module.exports = {
    getEvents,
    createEvents,
    updateEvents,
    deleteEvents
}