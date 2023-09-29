// const sequelize = require('../dbConfig')
const MembershipSchema = require('../../api/schemas/memberSchema').MembershipSchema;

// Creating table
const createMembershipTable = async () => {
  const res = await MembershipSchema.sync();
  return res;
};

// Dropping table
const dropMembershipTable = async () => {
  const res = await MembershipSchema.drop();
  return res;
};

// Table manipulations
const addMembership = async (data) => {
  try {
    // const { firstname, lastname, username, password } = data
    const res = await MembershipSchema.create(data);
    return res.toJSON();
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getMemberships = async () => {
  try {
    const res = await MembershipSchema.findAll();
    const data = res.map((membership) => membership.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};

const getMembership = async (id) => {
  try {
    const membership = await MembershipSchema.findByPk(id);
    // console.log(status);
    if (!membership) {
      return { message: 'Membership not found' };
    }
    return membership.toJSON();
  } catch (error) {
    return error;
  }
};

const updateMembership = async (id, data) => {
  try {
    const membership = await MembershipSchema.findByPk(id);
    if (!membership) {
      return { message: 'Membership not found' };
    }
    const res = await membership.update(data);
    res.save();
    return res.toJSON();
  } catch (error) {
    return error;
  }
};

const removeMembership = async (id) => {
  try {
    const membership = await MembershipSchema.findByPk(id);
    if (!membership) {
      return { message: 'Membership not found' };
    }
    await membership.destroy();
  } catch (error) {
    return error;
  }
};

export {
  createMembershipTable,
  dropMembershipTable,
  addMembership,
  getMemberships,
  getMembership,
  updateMembership,
  removeMembership,
};

// createMaritalStatusTable()
// dropMaritalStatusTable()
