const { DataTypes } = require('sequelize')
const sequelize = require('../../api/dbConfig').db

const ChurchSchema = sequelize.define('church', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    // logo: DataTypes.BLOB
}, {
    // Other model options go here
})

ChurchSchema.sync()

module.exports = ChurchSchema

