const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})

const Person = sequelize.define('person', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    called: {type: DataTypes.BOOLEAN},
})

module.exports = {
    User, 
    Person,
}