// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()

const pacienteController = require('../controllers/paciente.controller') // importar el archivo de controladores de medicos


//router.get('/:idPaciente', pacienteController.listarInfo)
router.get('/', pacienteController.listarTodos)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarUno)




module.exports = router;