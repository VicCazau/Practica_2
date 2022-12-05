// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") // importar express

const medicoRoutes = require("./medico.routes") // importar el archivo de rutas de medico
const pacienteRoutes = require("./paciente.routes") // importar el archivo de rutas de paciente
//const tratamientoRoutes = require("./tratamiento.routes") // importar el archivo de rutas de tratamiento

const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/medico", medicoRoutes) // para acceder a las rutas de medicos de la api siempre deberá empezar con /medicos
  router.use("/paciente", pacienteRoutes) // para acceder a las rutas de medicos de la api siempre deberá empezar con /pacientes
  //router.use("/tratamiento", tratamientoRoutes) // para acceder a las rutas de medicos de la api siempre deberá empezar con /tratamientos

  return router // retornar el router
};

module.exports = { rutas_init } // exportar el archivo de rutas de la api
