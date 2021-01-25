//Nombre        : Proyecto.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

import {Schema, model} from 'mongoose'
// modelo para los proyectos
const proyectoSchema = new Schema({
    nombreP: String,
    descripcion: String,
    duracion: Number,
    costo: Number
},{
    //para almacenar fecha de creación y modificacion
    timestamps:true,
    versionKey: false
})

//ex portamos el modelo como proyecto
export default model('Proyecto', proyectoSchema);