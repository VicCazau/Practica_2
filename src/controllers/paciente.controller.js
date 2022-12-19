// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MEDICO

const models = require("../database/models/index");

const errors = require("../const/errors");
const medico = require("../database/models/medico");

module.exports = {

    subirHistoria: async (req, res, next) => {
        try {

            //verifico si existe el usuario
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.body.pacienteId
                }
            })
            if (!paciente) return next(errors.pacienteInexistente)


            // busco el archivo del usuario
            const hist = await models.paciente_histClinica.findOne({
                where: {
                    pacienteId: req.body.pacienteId,
                    historia: req.body.historia
                }
            })
            if (!hist) { // si la historia no existe se crea

                const archivo = await models.paciente_histClinica.create({
                    historia: req.body.historia, //nombre                                         
                    pacienteId: req.body.pacienteId
                })

            }


            res.json({ 
                success: true,
                data: {
                    message: "historia cargado"
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    descargarHistoria: async (req, res, next) => {
        try {

            // verifico si existe el usuario
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.body.pacienteId
                }
            })
            if (!paciente) return next(errors.PacienteInexistente)

            // verifico si existe el historia
            const historia = await models.paciente_histClinica.findOne({
                where: {
                    pacienteId: req.body.pacienteId,
                    historia: req.body.historia
                }
            })
            if (!historia) return next(errors.ArchivoInexistente)


            res.download('uploads/paciente_histClinica' + historia.historia, historia.historia) //descarga el archivo

        } catch (err) {
            return next(err)
        }
    },


    listarTodos: async (req, res) => {
        try {
            const pacs = await models.paciente.findAll()

            if (!pacs) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    pacientes: pacs
                }
            })

        } catch (err) {
            return console.log (err)//next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const pac = await models.paciente.create(req.body)
            const relacion = await models.paciente_medico.create({
                pacienteId: pac.id,
                medicoId: req.body.medicoId
            })
            res.json({
                success: true,
                data: {
                    id: pac.id
                }
            })
 
        } catch (err) {
            return console.log (err)//return next(err)
        } 
    },

 

    listarUno: async (req, res) => {
        try {
            const pac = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                },
                include:[{
                    model: models.medico
                }]
            })            

            if (!pacs) return next(errors.PacienteInexistente)

            res.json({
                success: true,
                data: {
                    idPaciente: pac
                }
            })

        } catch (err) {
            return next(err)
        }

    }

}