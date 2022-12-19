const Joi = require("joi")

let registarse = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
    
})

module.exports = {
    registarse
}