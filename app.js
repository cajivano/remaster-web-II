//Nombre        : app.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

// definir modulos de node a utilizar
import express from 'express';
import morgan from 'morgan';
const path = require('path');

import pkg from '../package.json';

//definir librerias para configuración inicial ( para los roles definidos)
import {createRoles} from './libs/initialSetup'

// definir rutas
import proyectosRoutes from './routes/proyectos.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express();
// creación de roles al inicializar
createRoles();

app.set('pkg', pkg);

// para la renderizacion de vistas en ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// para correr la aplicacion, lectura de objetos json
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//archivos estaticos / publico
app.use(express.static(path.join(__dirname,'public')));

// ruta menu principal con vista en ejs
app.get('/registro', (req, res)=>{
    res.render('signup');
});

// ruta para login con vista en ejs
app.get('/login', (req, res)=>{
    res.render('login');
});



//rutas para proyectos, user, auth
app.use('/proyectos', proyectosRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

export default app;