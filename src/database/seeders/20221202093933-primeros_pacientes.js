
'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
      return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Perez",
                    dni: 30203002,
                    email: "jPerez@email.com",
                    edad: 25,
                    historiaClinica: "No se determino que tiene "
                }
            }),
            models.paciente.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    nombre: "Romina",
                    apellido: "Gonzalez",
                    dni: 10212222,
                    email: "RominaG@email.com",
                    edad: 67,
                    historiaClinica: "esta bastante sana"
                }
            })
        ])
    },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
