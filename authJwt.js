//Nombre        : authJwt.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano
import { JsonWebTokenError } from "jsonwebtoken";
// importamos jwt
import jwt from 'jsonwebtoken'
import config from '../config'
//importamos el modelo de User
import User from '../models/User'
//importamos el modelo de Role
import Role from '../models/Role'


//verificamos el token administrado, para esto usaremos headers
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        // en caso de que no tenga token
    if(!token) return res.status(403).json({message: "No administró token"})
   //verificamos el token 
    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id;
        //buscamos al usuario con ese token
    const user = await User.findById(req.userId, {password: 0});
    // revisamos si existe o no
    if(!user) return res.status(404).json({message: 'el usuario no existe'});

    next();
    } catch (error) {
        // caso error no se encuentra autorizado
        return res.status(401).json({message: 'No autorizado'})
    }
};

//  definir rol de visitante y restricciones 
export const isVisitante = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombreR==="visitante"){
        next();
        return;
    }
    
}
return res.status(403).json({message: "Requiere rol de visitante"})
};
//definir rol de admin y restricciones
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombreR==="admin"){
        next();
        return;
    }
    
}
return res.status(403).json({message: "Requiere rol de admin"})
}