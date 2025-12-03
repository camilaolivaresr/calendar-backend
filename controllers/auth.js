const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/User');


const newUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });
        console.log(usuario);

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'User existe :)'
            });
        }

        usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name
           
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Escriba al Admin'
        })
    }

};

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
};

const renewUsuario = (req, res = response) => {

    res.status(201).json({
        ok: true,
        msg: 'renew',
        email,
        password
    })
}

module.exports = {
    newUsuario,
    loginUsuario,
    renewUsuario
}

