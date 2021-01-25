//Nombre        : user.controller.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

// controlador para el registro desde users
export const createUser = (req, res) =>{
    res.redirect('/registro');
    console.log('creando usuario')

}