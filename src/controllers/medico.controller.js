// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MEDICO
const models = require("../database/models/index");

const errors = require("../const/errors");

module.exports = {

    listarUno: async (req, res) => { 
        try {
            const med = await models.medico.findOne({
                where: {
                    id: req.params.idmedico
                }
            })            
            if (!med) return next(errors.PacienteInexistente)
            res.json({
                success: true,
                data: {
                    idmedico: med
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res) => {
        try {
            const doctor = await models.medico.create(req.body)

            
            res.json({
                success: true,
                data: {
                    id: doctor.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarTodos: async (req, res) => {
        try {
            const meds = await models.medico.findAll()

            res.json({
                success: true,
                data: {
                    mecicos: meds
                }
            })

        } catch (err) {
            return next(err)
        }    }

}