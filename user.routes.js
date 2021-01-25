//Nombre        : user.routes.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

import {Router} from 'express';
const router = Router();

// importamos los controladores del user
import * as userCtrl from '../controllers/user.controller'
// importamos para las verificaciones conrrespondientes
import {authJwt, verifySignup} from '../middlewares'

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.createUser);

export default router;