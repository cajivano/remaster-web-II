//Nombre        : proyectos.routes.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

import {Router} from 'express';
const router = Router();

import * as proyectosCtrl from '../controllers/proyectos.controller';
import {authJwt } from '../middlewares';

//codigo para pruebas --> [authJwt.verifyToken, authJwt.isAdmin ] --> para token
//métodos HTTP para el CRUD de Proyecto 
router.post('/', [authJwt.verifyToken, authJwt.isAdmin ], proyectosCtrl.createProyecto);

router.get('/', proyectosCtrl.getProyectos);

router.get('/:proyectoId', proyectosCtrl.getProyectosById);

router.put('/:proyectoId', [authJwt.verifyToken, authJwt.isAdmin ], proyectosCtrl.updateProyectosById);

router.delete('/:proyectoId', [authJwt.verifyToken, authJwt.isAdmin ], proyectosCtrl.deleteProyectosById);


export default router;