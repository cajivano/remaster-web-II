//Nombre        : verifySignup.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

//importamos el modelo de Role
import {ROLES} from '../models/Role';
//importamos el modelo de User
import User from '../models/User';

//verificar usuario duplicado
export const checkDuplicateUsernameOrEmail = async (req, res, next)=>{
    //verificamos si el usuario ya existe por su nombre de usuario
    const user = await User.findOne({nombreU: req.body.nombreU})
    if(user) return res.status(400).json({message: 'El usuario ya existe'})

    //verificamos si el usuario ya existe por su correo
    const correo = await User.findOne({correo: req.body.correo})
    if(correo) return res.status(400).json({message: 'El correo ya se registró'})
    // caso contrario crea el usuario
    next();
}

//verificar si existe el usuario
export const checkRolesExisted = (req, res, next) => {
if (req.body.roles) {
        for (let i= 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    //concatenamos lo ingresado con un mensaje
                    message: `El rol ${req.body.roles[i]} no existe`
                });

            }
            
        }
    }
    next();
}