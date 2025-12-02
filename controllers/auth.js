const {response} = require('express');


const newUsuario = (req, res = response) => {
 
    const {name, email, password} = req.body;
    
    res.status(201).json({
        ok: true,
        msg:'register',
        name,
        email,
        password
    })
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