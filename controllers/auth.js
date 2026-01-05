const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/User');
const User = require('../models/User');
const { generarJWT } = require('../helpers/jwt');


const newUsuario = async (req, res = response) => {

    const { email, password } = req.body;

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

        const token = await generarJWT(usuario.id, usuario.name)

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token

        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Escriba al Admin'
        })
    }

};

const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email });


        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'User no existe con esa convinacion :)'
            });
        }
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password Incorrecto'
            })

        }

        const token = await generarJWT(usuario.id, usuario.name)

        res.json({
            ok: true,
            uid: usuario.id,
            name: User.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Escriba al Admin'
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
};

const renewUsuario = async(req, res = response) => {
  
    const {uid , name} = req;

    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name, 
        token

    })
}

module.exports = {
    newUsuario,
    loginUsuario,
    renewUsuario
}

