// FUNCIONAMIENTO DE TODAS LAS RUTAS 
const models = require("../database/models/index");

const errors = require("../const/errors");

module.exports = {


    login: async (req, res,next) => {
        try {
            const logeado = await models.paciente.findOne({
                where: {
                    mail: req.body.mail
                }
            })
        
            var passCoincide = false

            if (logeado){
                passCoincide = bcrypt.compareSync(req.body.password, paciente.password)

            }
        if( !logeado || !passCoincideas){
            return   next(errors.CredemcialesInvalidas)
        }

            res.json({
                success: true,
                data: {
                    token: signJWT(logeado),
                    id: logeado.id,
                    nombre:logeado.nombre,
                    apellido: logeado.apellido,
                    email: logeado.email,
                }
            })

        } catch (err) {
            return console.log (err)//next(err)
        }
    },

    registrarse: async (req, res, next) => {
         try {
                req.body.password = bcrypt.hashSync(req.body.password,10)
                
                const pac = await models.paciente.create(req.body)
     
                res.json({
                    success: true,
                    data: {
                        id: pac.id
                    }
                })
     
            } catch (err) {
                return console.log (err)//return next(err)
            } 
        }
    }
