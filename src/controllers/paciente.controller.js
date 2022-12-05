// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MEDICO

const models = require("../database/models/index");

const errors = require("../const/errors");
const medico = require("../database/models/medico");

module.exports = {

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