const {response} = require('express');
const Usuario = require('../models/User')


const newUsuario = async(req, res = response) => {
 
    // const {name, email, password} = req.body;
    try{
         const usuario = new Usuario(req.body);

   await  usuario.save();
    
    res.status(201).json({
        ok: true,
        msg:'register',
    })
    }catch(error) {
        res.status(500).json({
            ok: false,
            msg: 'Escriba al Admin'
        })
    }
  
};

const loginUsuario = (req, res = response) => {
    const { email, password} = req.body;
 
    res.status(201).json({
        ok: true,
        msg:'login',
        email,
        password
    })
};

const renewUsuario = (req, res = response) => {
    
    res.status(201).json({
        ok: true,
        msg:'renew',
        email,
        password
    })
}

module.exports = {
    newUsuario,
    loginUsuario,
    renewUsuario
}

