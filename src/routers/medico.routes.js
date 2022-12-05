// RUTAS DE MEDICOS

const router = require("express").Router(); // importar express.Router()

const medicoController = require('../controllers/medico.controller') // importar el archivo de controladores de medicos

const validate = require('../middlewares/validate') 
const medicoscheme = require('../middlewares/schemes/medico.scheme') 


router.get('/:idmedico', medicoController.listarUno)
router.get('/', validate(medicoscheme.crearMedico),medicoController.listarTodos)
router.post('/', medicoController.crear)




module.exports = router;