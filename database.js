//Nombre        : database.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

// importamos mondgoose de los modulos
import mongoose from 'mongoose';

//conexion con la bd de mongodb
mongoose.connect("mongodb://localhost/remasiidb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
    
})
// posibles escenarios de respuesta
    .then(db=> console.log('Db is connected'))
    .catch(error=>console.log(error))