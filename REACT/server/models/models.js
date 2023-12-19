const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Animal = sequelize.define('animal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    admission: {type: DataTypes.DATEONLY, allowNull: false},
    birth: {type: DataTypes.DATEONLY, allowNull: false},
    image: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.TEXT}
})

const Information = sequelize.define('information', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    species: {type: DataTypes.STRING, allowNull: false},
    animal_class: {type: DataTypes.STRING, allowNull: false}
})

const Placement = sequelize.define('placement', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    area: {type: DataTypes.FLOAT, allowNull: false}
})

Information.hasMany(Animal)
Animal.belongsTo(Information)

Placement.hasMany(Animal)
Animal.belongsTo(Placement)

module.exports = {
    User,
    Animal,
    Information,
    Placement
}
