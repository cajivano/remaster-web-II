//levantando aplicacion
import app from './app';
// archivo de la base de datos
import './database'

// conexion al servidor en el puerto 4000, si se cambia a despliegue es mejor usar otro método
app.listen(4000);
console.log('Server listen on port:', 4000);

//iniciando el servidor
//app.listen(app.get('port'), ()=> {
//    console.log('Server on port:', app.get('port')); 
// }); 