const { response } = require('express');
const Evento = require('../models/Event')


const getEvent = (req, res = response) => {


    res.json({
        ok: true,
        msg: 'obtener eventos'
    })
}

const createEvent = async (req, res = response) => {
   
    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;
        const eventDB = await evento.save()
        
        res.json({
            ok: true,
            evento: eventDB
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Admin'
        });
    }

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