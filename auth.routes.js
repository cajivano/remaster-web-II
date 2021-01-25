//Nombre        : auth.routes.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

import {Router} from 'express';
const router = Router();
//importamos controlador de autentificacion 
import * as authCtrl from '../controllers/auth.controller';
import {verifySignup} from '../middlewares';

// creación de usuario con mpetodos de validacion
router.post('/signUp', 
[verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authCtrl.signUp);

// login del usuario
router.post('/signIn', authCtrl.signIn);

export default router;