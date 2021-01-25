//Nombre        : User.js
//Autor         : Camila Jimena Vargas Noriega
//Asignatura    : Ingeniería y Desarrollo en la Web
//Práctica      : Implementación de una solución basada en una aplicación web II
//Docente       : Octavio Aguirre Lozano

import {Schema, model} from 'mongoose'
// importamos para poder encriptar el password al momento de almacenarlo
import bcrypt from 'bcryptjs'

// modelo para el usuario
const userSchema = new Schema({
    nombreU:{
        type: String,
        unique: true
    },
    correo: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
        ref: "Role",
        type: Schema.Types.ObjectId
        },
    ],
},
    {
        // fecha de modificación y creación
    timestamps: true,
    versionKey: false
    }
);

// para encriptar el password suministrado
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// para comparar la contraseña ingresada en elogin con la almacenada
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


// expostamos el modelo como User
export default model('User', userSchema);