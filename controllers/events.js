const { response } = require('express');
const Evento = require('../models/Event')


const getEvent = async(req, res = response) => {

    const events = await Evento.find()
                               .populate('user', 'name')

    res.json({
        ok: true,
       events
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


const updateEvent = async(req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById( eventoId );
    
        
        if( !evento ){
            res.status(404).json({
                ok: false,
                msg: 'No existe evet por id'
            });
        }
        
        if( evento.user.toString() !== uid) {
                return res.status(401).json({
                ok: false,
                msg: 'No privilegio'
            });
        }
        const newEvent = {
            ...req.body,
            user: uid
        }

        const updateNewEvent = await Evento.findByIdAndUpdate(eventoId, newEvent, {new: true});
       
        res.json({
            ok: true,
            evento: updateNewEvent
        })
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con la Admin'
        });
        
    }

    // res.json({
    //     ok: true,
    //     eventoId
    // })
}


const deleteEvent = async(req, res = response) => {


    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById( eventoId );
    
        
        if( !evento ){
            return res.status(404).json({
                ok: false,
                msg: 'No existe evet por id'
            });
        }
        
        if( evento.user.toString() !== uid) {
                return res.status(401).json({
                ok: false,
                msg: 'No privilegio'
            });
        }
     

     await Evento.findByIdAndDelete(eventoId);
       
        res.json({
            ok: true
            
        })
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con la Admin'
        });
        
    }

}

module.exports = {
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
}