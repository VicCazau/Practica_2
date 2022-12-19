const jwt = require('jsonwebtoken') // para crear el token
const globalConstants = require('../const/globalConstants')

module.exports = function (paciente) { 

    if (paciente) {

        // Se crea el token
        const token = jwt.sign({
            id: paciente.id
        },
            globalConstants.JWT_SECRET, // clave secreta
            {
                expiresIn: '1000m' // tiempo de expiracion
            }
        )
        return token // devuelvo el token
    } else {
        return null // si no hay paciente, devuelvo null
    }


}