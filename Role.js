//Nombre        : Role.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

import {Schema, model} from 'mongoose';

//definimos los usuarios con los que vamos a trabajar, en caso tuvieramos una cantidad extensa deberiamos recorrerlo con un arreglo
export const ROLES = ["user", "admin", "visitante"]

// modelo de los roles
const roleSchema = new Schema({
    nombreR: String
    }, 
    {
    versionKey: false
    }
);

// exportamos el modelo como role
export default model('Role', roleSchema);