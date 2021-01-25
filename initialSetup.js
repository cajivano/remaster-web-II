//Nombre        : initialSetup.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

// importamos el modelo de rol
import Role from '../models/Role'
export const createRoles = async()=> {
    
    try {
        //para ya no crear más solo la primera vez
        const count = await Role.estimatedDocumentCount()

    if(count > 0) return;
    // definimos los roles por defecto para que no se puedan crear más que esos y se verifique
    const values = await Promise.all([
    new Role({nombreR: 'user'}).save(),
    new Role({nombreR: 'admin'}).save(),
    new Role({nombreR: 'visitante'}).save()
    ])
    //mostramos los roles creados
    console.log(values)
    } catch (error) {
        console.error(error)
    }
}