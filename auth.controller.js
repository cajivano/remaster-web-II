//Nombre        : auth.controller.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

//importamos modelo del user
import User from '../models/User'
// importamos jwt
import jwt from 'jsonwebtoken'
// importamos config para SECRET
import config from '../config'
//importamos modelo del rOle
import Role from '../models/Role'

// para el registro del nuevo usuario
export const signUp = async (req,res) => {
    //parametros
    const {nombreU, correo, password, roles}= req.body;
        
    const newUser = new User({
        nombreU,
        correo,
        password: await User.encryptPassword(password)
    })
    //definir rol en especifico
    if (roles){
        const foundRoles = await Role.find({nombreR: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
        
    } else {
        //caso no se defina rol--> default sera user (en lugar de admin y visitante)
        const role = await Role.findOne({nombreR: 'user'})
        newUser.roles = [role._id];
    }
    //evento asyncrono, esperamos creacion
    const savedUser = await newUser.save();
    console.log(savedUser)
    // generar token
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })

    res.status(200).json({token})
}

// para realizar el login del usuario + restricciones
export const signIn = async (req,res) => {
    //comprobacion por correo existente
    const userFound = await User.findOne({correo: req.body.correo}).populate("roles");
    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"}) 
        
    // comprobacion por password
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if (!matchPassword) return res.status(401).json({token: null, message: 'Contraseña Incorrecta'})
    
    // generacion de token 
    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })
    res.json({token})

    res.render('proyectos');
}