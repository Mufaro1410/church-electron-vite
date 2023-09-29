import { DataTypes } from 'sequelize';
// import sequelize from '../dbConfig';
const sequelize = require('../../api/dbConfig').db;

const UserSchema = sequelize.define(
  'user',
  {
    // Model attributes are defined here
    // firstName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // lastName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // confirmPassword: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    // Other model options go here
  }
);

export { UserSchema };
