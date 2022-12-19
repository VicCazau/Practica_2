// RUTAS DE MEDICOS

const globalConstants = require('../const/globalConstants')

const router = require("express").Router(); // importar express.Router()

const pacienteController = require('../controllers/paciente.controller') // importar el archivo de controladores de medicos

var multer = require('multer') // MULTER ES UN MODULO PARA SUBIR ARCHIVOS A NUESTRO SERVIDOR 
var upload = multer({ // INSTANCIAMOS MULTER Y LO CONFIGURAMOS
    dest: 'uploads/paciente_histClinica/', //RUTA DONDE SE VAN A SUBIR LOS ARCHIVOS
    limits: { fileSize: globalConstants.MAX_FILE_SIZE } // PESO MAXIMO DEL ARCHIVO 20MB
})


router.post('/subirHistoria', upload.single('jpg'), pacienteController.subirHistoria)
router.post('/descargarHistoria/', pacienteController.descargarHistoria) 


//router.get('/:idPaciente', pacienteController.listarInfo)
router.get('/', pacienteController.listarTodos)
router.post('/', pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarUno)




module.exports = router;