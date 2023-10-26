"use strict";
const electron = require("electron");
const path = require("path");
const sequelize$2 = require("sequelize");
const bcryptjs = require("bcryptjs");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);
require("../../api/schemas/churchSchema");
const sequelize$1 = require("../../api/dbConfig").db;
const UserSchema = sequelize$1.define(
  "user",
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
      type: sequelize$2.DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: sequelize$2.DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: sequelize$2.DataTypes.STRING,
      allowNull: false
    }
    // confirmPassword: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    // Other model options go here
  }
);
const passwordEncrpt = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};
const addUser = async (data) => {
  try {
    const userPassword = data.password;
    const hashedPassword = await passwordEncrpt(userPassword);
    data.password = hashedPassword;
    console.log(data);
    const res = await UserSchema.create(data);
    return res.toJSON();
  } catch (error) {
    return error;
  }
};
const getUsers = async () => {
  try {
    const res = await UserSchema.findAll();
    const data = res.map((user) => user.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getUser = async (id) => {
  try {
    const user = await UserSchema.findByPk(id);
    if (!user) {
      return { message: "User not found" };
    }
    return user.toJSON();
  } catch (error) {
    return error;
  }
};
const updateUser = async (id, data) => {
  try {
    const user = await UserSchema.findByPk(id);
    if (!user) {
      return { message: "User not found" };
    }
    const res = await user.update(data);
    res.save();
    return res.toJSON();
  } catch (error) {
    return error;
  }
};
const removeUser = async (id) => {
  try {
    const user = await UserSchema.findByPk(id);
    if (!user) {
      return { message: "User not found" };
    }
    return await user.destroy();
  } catch (error) {
    return error;
  }
};
const MemberSchema$1 = require("../../api/schemas/memberSchema").MemberSchema;
const addMembers = async (data) => {
  try {
    await MemberSchema$1.bulkCreate(data);
    return { message: "bulk creation successful" };
  } catch (error) {
    console.log(error);
    return error;
  }
};
const addMember = async (data) => {
  try {
    const res = await MemberSchema$1.create(data);
    return res.toJSON();
  } catch (error) {
    console.log(error);
    return error;
  }
};
const readMembers = async () => {
  try {
    const res = await MemberSchema$1.findAll({
      include: { all: true }
    });
    const data = res.map((user) => user.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const readMember = async (id) => {
  try {
    const member = await MemberSchema$1.findByPk(id);
    if (!member) {
      return { message: "Member not found" };
    }
    return member.toJSON();
  } catch (error) {
    return error;
  }
};
const patchMember = async (id, data) => {
  try {
    const member = await MemberSchema$1.findByPk(id);
    if (!member) {
      return { message: "Member not found" };
    }
    const res = await member.update(data);
    res.save();
    return res.toJSON();
  } catch (error) {
    return error;
  }
};
const removeMember = async (id) => {
  try {
    const member = await MemberSchema$1.findByPk(id);
    if (!member) {
      return { message: "Member not found" };
    }
    await member.destroy();
    return { message: "Member deleted successfully" };
  } catch (error) {
    return error;
  }
};
const MaritalStatusSchema$1 = require("../../api/schemas/memberSchema").MaritalStatusSchema;
const addMaritalStatus = async (data) => {
  try {
    const res = await MaritalStatusSchema$1.create(data);
    return res.toJSON();
  } catch (error) {
    return error.toJSON();
  }
};
const getMaritalStatuses = async () => {
  try {
    const res = await MaritalStatusSchema$1.findAll();
    const data = res.map((status) => status.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getMaritalStatus = async (id) => {
  try {
    const status = await MaritalStatusSchema$1.findByPk(id);
    if (!status) {
      return { message: "Status not found" };
    }
    return status.toJSON();
  } catch (error) {
    return error;
  }
};
const updateMaritalStatus = async (id, data) => {
  try {
    const status = await MaritalStatusSchema$1.findByPk(id);
    if (!status) {
      return { message: "Status not found" };
    }
    const res = await status.update(data);
    res.save();
    return res.toJSON();
  } catch (error) {
    return error;
  }
};
const removeMaritalStatus = async (id) => {
  try {
    const status = await MaritalStatusSchema$1.findByPk(id);
    if (!status) {
      return { message: "Status not found" };
    }
    await status.destroy();
    return;
  } catch (error) {
    return error;
  }
};
const MembershipSchema$1 = require("../../api/schemas/memberSchema").MembershipSchema;
const addMembership = async (data) => {
  try {
    const res = await MembershipSchema$1.create(data);
    return res.toJSON();
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getMemberships = async () => {
  try {
    const res = await MembershipSchema$1.findAll();
    const data = res.map((membership) => membership.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getMembership = async (id) => {
  try {
    const membership = await MembershipSchema$1.findByPk(id);
    if (!membership) {
      return { message: "Membership not found" };
    }
    return membership.toJSON();
  } catch (error) {
    return error;
  }
};
const updateMembership = async (id, data) => {
  try {
    const membership = await MembershipSchema$1.findByPk(id);
    if (!membership) {
      return { message: "Membership not found" };
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
    const membership = await MembershipSchema$1.findByPk(id);
    if (!membership) {
      return { message: "Membership not found" };
    }
    await membership.destroy();
  } catch (error) {
    return error;
  }
};
const SocietySchema$1 = require("../../api/schemas/memberSchema").SocietySchema;
const addSociety = async (data) => {
  try {
    const res = await SocietySchema$1.create(data);
    return res.toJSON();
  } catch (error) {
    return error.toJSON();
  }
};
const getSocieties = async () => {
  try {
    const res = await SocietySchema$1.findAll();
    const data = res.map((society) => society.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getSociety = async (id) => {
  try {
    const society = await SocietySchema$1.findByPk(id);
    if (!society) {
      return { message: "Society not found" };
    }
    return society.toJSON();
  } catch (error) {
    return error;
  }
};
const updateSociety = async (id, data) => {
  try {
    const society = await SocietySchema$1.findByPk(id);
    if (!society) {
      return { message: "Society not found" };
    }
    const res = await society.update(data);
    res.save();
    return res.toJSON();
  } catch (error) {
    return error;
  }
};
const removeSociety = async (id) => {
  try {
    const society = await SocietySchema$1.findByPk(id);
    if (!society) {
      return { message: "Society not found" };
    }
    await society.destroy();
    return;
  } catch (error) {
    return error;
  }
};
const SectionSchema$1 = require("../../api/schemas/memberSchema").SectionSchema;
const addSection = async (data) => {
  try {
    const res = await SectionSchema$1.create(data);
    return res.toJSON();
  } catch (error) {
    return error.toJSON();
  }
};
const getSections = async () => {
  try {
    const res = await SectionSchema$1.findAll();
    const data = res.map((section) => section.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getSection = async (id) => {
  try {
    const section = await SectionSchema$1.findByPk(id);
    if (!section) {
      return { message: "Section not found" };
    }
    return section.toJSON();
  } catch (error) {
    return error;
  }
};
const updateSection = async (id, data) => {
  try {
    const section = await SectionSchema$1.findByPk(id);
    if (!section) {
      return { message: "Section not found" };
    }
    const res = await section.update(data);
    res.save();
    return res.toJSON();
  } catch (error) {
    return error;
  }
};
const removeSection = async (id) => {
  try {
    const section = await SectionSchema$1.findByPk(id);
    if (!section) {
      return { message: "Section not found" };
    }
    await section.destroy();
    return;
  } catch (error) {
    return error;
  }
};
const { MaritalStatusSchema, MembershipSchema, MemberSchema, SocietySchema, SectionSchema } = require("../../api/schemas/memberSchema");
let statisticsData = [];
function processStats(name, value) {
  statisticsData.push({ "name": name, "count": value });
  return;
}
const total_members = async () => {
  try {
    const total_members2 = await MemberSchema.findAndCountAll({});
    processStats("Total Church Members", total_members2.count);
    return;
  } catch (error) {
    return error;
  }
};
const mumcStats = async () => {
  try {
    const total_mumc_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: ["mumc-full", "mumc-probation"] } }
      ]
    });
    processStats("Total MUMC Members", total_mumc_members.count);
    const total_mumc_full_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "mumc-full" } }
      ]
    });
    processStats("Total Full MUMC Members", total_mumc_full_members.count);
    const total_mumc_probation_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "mumc-probation" } }
      ]
    });
    processStats("Total Probation MUMC Members", total_mumc_probation_members.count);
    return;
  } catch (error) {
    return error;
  }
};
const rrwStats = async () => {
  try {
    const total_rrw_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: ["rrw-full", "rrw-probation"] } }
      ]
    });
    processStats("Total RRW Members", total_rrw_members.count);
    const total_rrw_full_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "rrw-full" } }
      ]
    });
    processStats("Total Full RRW Members", total_rrw_full_members.count);
    const total_rrw_probation_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "rrw-probation" } }
      ]
    });
    processStats("Total Probation RRW Members", total_rrw_probation_members.count);
    return;
  } catch (error) {
    return error;
  }
};
const umyfStats = async () => {
  try {
    const total_umyf_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: ["umyf-full", "umyf-probation"] } }
      ]
    });
    processStats("Total UMYF Members", total_umyf_members.count);
    const total_umyf_full_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "umyf-full" } }
      ]
    });
    processStats("Total Full UMYF Members", total_umyf_full_members.count);
    const total_umyf_probation_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "umyf-probation" } }
      ]
    });
    processStats("Total Probation UMYF Members", total_umyf_probation_members.count);
    return;
  } catch (error) {
    return error;
  }
};
const jcStats = async () => {
  try {
    const total_jc_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: ["jc-b", "jc-nb"] } }
      ]
    });
    processStats("Total JC Members", total_jc_members.count);
    const total_jc_b_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "jc-b" } }
      ]
    });
    processStats("Total Baptised JC Members", total_jc_b_members.count);
    const total_jc_nb_members = await MemberSchema.findAndCountAll({
      include: [
        { model: SocietySchema, where: { title: "jc-nb" } }
      ]
    });
    processStats("Total Not Baptised JC Members", total_jc_nb_members.count);
    return;
  } catch (error) {
    return error;
  }
};
const genderStats = async () => {
  try {
    const males = await MemberSchema.findAndCountAll({ where: { gender: "male" } });
    processStats("Males", males.count);
    const females = await MemberSchema.findAndCountAll({ where: { gender: "female" } });
    processStats("Females", females.count);
  } catch (error) {
    return error;
  }
};
const membershipStats = async () => {
  try {
    const full = await MemberSchema.findAndCountAll({
      include: [
        { model: MembershipSchema, where: { title: "full" } }
      ]
    });
    processStats("Full Members", full.count);
    const probation = await MemberSchema.findAndCountAll({
      include: [
        { model: MembershipSchema, where: { title: "probation" } }
      ]
    });
    processStats("Probation Members", probation.count);
  } catch (error) {
    return error;
  }
};
const maritalStats = async () => {
  try {
    const single = await MemberSchema.findAndCountAll({
      include: [
        { model: MaritalStatusSchema, where: { title: "single" } }
      ]
    });
    processStats("Singles", single.count);
    const married = await MemberSchema.findAndCountAll({
      include: [
        { model: MaritalStatusSchema, where: { title: "married" } }
      ]
    });
    processStats("Married", married.count);
    const divorced = await MemberSchema.findAndCountAll({
      include: [
        { model: MaritalStatusSchema, where: { title: "divorced" } }
      ]
    });
    processStats("Divorced", divorced.count);
    const widow = await MemberSchema.findAndCountAll({
      include: [
        { model: MaritalStatusSchema, where: { title: "widow" } }
      ]
    });
    processStats("Widows", widow.count);
    const widower = await MemberSchema.findAndCountAll({
      include: [
        { model: MaritalStatusSchema, where: { title: "widower" } }
      ]
    });
    processStats("Widowers", widower.count);
  } catch (error) {
    return error;
  }
};
async function getStats() {
  statisticsData = [];
  await total_members();
  await mumcStats();
  await rrwStats();
  await umyfStats();
  await jcStats();
  await genderStats();
  await membershipStats();
  await maritalStats();
  return statisticsData;
}
async function ipcHandler(path2, data) {
  switch (path2) {
    case "statistics":
      return await getStats();
    case "addUser":
      return await addUser(data.data);
    case "getUsers":
      return await getUsers();
    case "getUser":
      return await getUser(data.id);
    case "updateUser":
      return await updateUser(data.id, data.data);
    case "deleteUser":
      return await removeUser(data.id);
    case "addMembers":
      return await addMembers(data.data);
    case "addMember":
      return await addMember(data.data);
    case "getMembers":
      return await readMembers();
    case "getMember":
      return await readMember(data.id);
    case "updateMember":
      return await patchMember(data.id, data.data);
    case "deleteMember":
      return await removeMember(data.id);
    case "addMembership":
      return await addMembership(data.data);
    case "getMemberships":
      return await getMemberships();
    case "getMembership":
      return await getMembership(data.id);
    case "updateMembership":
      return await updateMembership(data.id, data.data);
    case "deleteMembership":
      return await removeMembership(data.id);
    case "addMaritalStatus":
      return await addMaritalStatus(data.data);
    case "getMaritalStatuses":
      return await getMaritalStatuses();
    case "getMaritalStatus":
      return await getMaritalStatus(data.id);
    case "updateMaritalStatus":
      return await updateMaritalStatus(data.id, data.data);
    case "deleteMaritalStatus":
      return await removeMaritalStatus(data.id);
    case "addSociety":
      return await addSociety(data.data);
    case "getSocieties":
      return await getSocieties();
    case "getSociety":
      return await getSociety(data.id);
    case "updateSociety":
      return await updateSociety(data.id, data.data);
    case "deleteSociety":
      return await removeSociety(data.id);
    case "addSection":
      return await addSection(data.data);
    case "getSections":
      return await getSections();
    case "getSection":
      return await getSection(data.id);
    case "updateSection":
      return await updateSection(data.id, data.data);
    case "deleteSection":
      return await removeSection(data.id);
  }
}
const sequelize = require("../../api/dbConfig").db;
sequelize.sync().then(() => console.log("db is ready")).catch((err) => console.log(err));
let mainWindow;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    title: "Church Admin App",
    // fullscreen:true,
    // width: 800,
    // height: 600,
    webPreferences: {
      preload: path__namespace.join(__dirname, "../../out/preload/preload.js"),
      webSecurity: true
    }
    // devTools: true
  });
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.on("closed", () => mainWindow = null);
}
electron.app.whenReady().then(() => {
  createWindow();
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
electron.ipcMain.on("send", async (event, path2, data) => {
  return await ipcHandler(path2, data);
});
electron.ipcMain.handle("invoke", async (event, path2, data) => {
  return await ipcHandler(path2, data);
});
