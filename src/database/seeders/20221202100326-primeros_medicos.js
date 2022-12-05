'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.medico.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "Esteban",
                    apellido: "Gomez",
                    dni: 30203002,
                    email: "e@email.com",
                    edad: 34,
                    especialidad: "CardiTRaumatoloologo"
                  
                }
            }),
            models.medico.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    nombre: "Romina",
                    apellido: "Gonzalez",
                    dni: 10212222,
                    email: "RominaG@email.com",
                    edad: 67,
                    especialidad: "Clinica"
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
