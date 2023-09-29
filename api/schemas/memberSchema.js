const { DataTypes } = require('sequelize')
const sequelize = require('../../api/dbConfig').db;

// Members schema
const MemberSchema = sequelize.define('member', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

const MaritalStatusSchema = sequelize.define(
  'maritalStatus',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const MembershipSchema = sequelize.define(
  'membership',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const SocietySchema = sequelize.define(
  'society',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

const SectionSchema = sequelize.define(
  'section',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Associations
MaritalStatusSchema.hasMany(MemberSchema);
MemberSchema.belongsTo(MaritalStatusSchema);

MembershipSchema.hasMany(MemberSchema);
MemberSchema.belongsTo(MembershipSchema);

SocietySchema.hasMany(MemberSchema);
MemberSchema.belongsTo(SocietySchema);

SectionSchema.hasMany(MemberSchema);
MemberSchema.belongsTo(SectionSchema);

module.exports = {
  MemberSchema,
  MaritalStatusSchema,
  MembershipSchema,
  SocietySchema,
  SectionSchema,
};
