const { DataTypes } = require('sequelize');
const db = require('../dbConfig');

// Members schema
const MemberSchema = db.define(
  'member',
  {
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
    // section: {
    //     type: DataTypes.NUMBER,
    //     allowNull: false
    // },
    // maritalStatus: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // membership: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // society: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
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

const MaritalStatusSchema = db.define(
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

const MembershipSchema = db.define(
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

const SocietySchema = db.define(
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

const SectionSchema = db.define(
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
