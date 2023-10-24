const { Sequelize } = require('sequelize')

// Creating a db instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  omitNull: true,
  storage: './church.db',
});

// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// testConnection()

// sequelize.sync().then(() => console.log('db is ready')).catch((err) => console.log(err))

module.exports.db = sequelize