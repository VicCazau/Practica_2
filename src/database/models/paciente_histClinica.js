'use strict'


module.exports = (sequelize, DataTypes) => {

  let Paciente_HistClinica = sequelize.define('paciente_histClinica', {
    id: {
        type: DataTypes.BIGINT, 
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false 
      },      
      historia: { //nombre de la historia
        type: DataTypes.STRING,
        allowNull: true
      },       
        updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: DataTypes.NOW, 
        allowNull: false
      },
      deletedAt: { 
        type: DataTypes.DATE, 
        field: 'deleted_at' 
       } }, {
        paranoid: true,
        freezeTableName: true,
    })
  
    Paciente_HistClinica.associate = models => {
     Paciente_HistClinica.belongsTo(models.paciente) 
    
  }

  return Paciente_HistClinica
}