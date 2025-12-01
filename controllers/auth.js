const {response} = require('express');
const {validationResult} = require('express-validator');


const newUsuario = (req, res = response) => {
 
    const {name, email, password} = req.body;
    
    // if(name.length < 3 ){
    //     return res.status(400).json({
    //         ok:false,
    //         msg:'El nombre debe ser mayor a 3 letras'
    //     })
    // }
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()

        })
    }
    
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

      const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()

        })
    }
 
    res.status(201).json({
        ok: true,
        msg:'login',
        email,
        password
    })
};

const renewUsuario = (req, res = response) => {
  
     const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()

        })
    }
    
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