// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()

const autenticacionController = require('../controllers/autenticacion.controller') // importar el archivo de controladores de medicos

const validate = require('../middlewares/validate') 
const autenticacionScheme = require('../middlewares/schemes/autenticacion.scheme') 



router.get('/login', validate(autenticacionScheme.login),autenticacionController.login)
router.post('/registrarse', autenticacionController.registrarse)




module.exports = router;