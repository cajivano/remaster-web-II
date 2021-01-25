//Nombre        : proyectos.controller.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

// importamos el modelo de Proyecto
import  Proyecto from '../models/Proyecto'

//metodos para peticiones http a probar, resultado json
// para crear proyecto desde post
export const createProyecto = async (req, res)=>{
    console.log(req.body)

    const {nombreP, descripcion, duracion, costo} = req.body
    const newProyecto = new Proyecto({nombreP, descripcion, duracion, costo});
    const proyectoSaved = await newProyecto.save()

    res.status(201).json(proyectoSaved);
};

//para listar proyectos desde get
export const getProyectos = async (req, res)=>{
    const proyectos = await Proyecto.find();
    res.json(proyectos)
    res.render('proyectos', {proyectos});
};

// filtrar proyector por id desde get
export const getProyectosById = async (req, res)=>{
    const proyecto =  await Proyecto.findById(req.params.proyectoId);
    res.status(200).json(proyecto)
};

// modificar proyectos desde put
export const updateProyectosById = async (req, res)=>{
    const updatedProyecto = await Proyecto.findByIdAndUpdate(req.params.proyectoId, req.body, {
        new: true
    })
    res.status(204).json(updatedProyecto)
};

// elimiar proyectos desde delete
export const deleteProyectosById = async (req, res)=>{
    const deletedProyecto = await Proyecto.findByIdAndDelete(req.params.proyectoId)
    res.status(204).json()
};