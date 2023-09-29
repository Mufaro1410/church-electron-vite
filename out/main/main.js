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
const MemberSchema = require("../../api/schemas/memberSchema").MemberSchema;
const addMembers = async (data) => {
  try {
    await MemberSchema.bulkCreate(data);
    return { message: "bulk creation successful" };
  } catch (error) {
    console.log(error);
    return error;
  }
};
const addMember = async (data) => {
  try {
    const res = await MemberSchema.create(data);
    return res.toJSON();
  } catch (error) {
    console.log(error);
    return error;
  }
};
const readMembers = async () => {
  try {
    const res = await MemberSchema.findAll({
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
    const member = await MemberSchema.findByPk(id);
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
    const member = await MemberSchema.findByPk(id);
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
    const member = await MemberSchema.findByPk(id);
    if (!member) {
      return { message: "Member not found" };
    }
    await member.destroy();
    return { message: "Member deleted successfully" };
  } catch (error) {
    return error;
  }
};
const MaritalStatusSchema = require("../../api/schemas/memberSchema").MaritalStatusSchema;
const addMaritalStatus = async (data) => {
  try {
    const res = await MaritalStatusSchema.create(data);
    return res.toJSON();
  } catch (error) {
    return error.toJSON();
  }
};
const getMaritalStatuses = async () => {
  try {
    const res = await MaritalStatusSchema.findAll();
    const data = res.map((status) => status.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getMaritalStatus = async (id) => {
  try {
    const status = await MaritalStatusSchema.findByPk(id);
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
    const status = await MaritalStatusSchema.findByPk(id);
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
    const status = await MaritalStatusSchema.findByPk(id);
    if (!status) {
      return { message: "Status not found" };
    }
    await status.destroy();
    return;
  } catch (error) {
    return error;
  }
};
const MembershipSchema = require("../../api/schemas/memberSchema").MembershipSchema;
const addMembership = async (data) => {
  try {
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
    const membership = await MembershipSchema.findByPk(id);
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
    const membership = await MembershipSchema.findByPk(id);
    if (!membership) {
      return { message: "Membership not found" };
    }
    await membership.destroy();
  } catch (error) {
    return error;
  }
};
const SocietySchema = require("../../api/schemas/memberSchema").SocietySchema;
const addSociety = async (data) => {
  try {
    const res = await SocietySchema.create(data);
    return res.toJSON();
  } catch (error) {
    return error.toJSON();
  }
};
const getSocieties = async () => {
  try {
    const res = await SocietySchema.findAll();
    const data = res.map((society) => society.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getSociety = async (id) => {
  try {
    const society = await SocietySchema.findByPk(id);
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
    const society = await SocietySchema.findByPk(id);
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
    const society = await SocietySchema.findByPk(id);
    if (!society) {
      return { message: "Society not found" };
    }
    await society.destroy();
    return;
  } catch (error) {
    return error;
  }
};
const SectionSchema = require("../../api/schemas/memberSchema").SectionSchema;
const addSection = async (data) => {
  try {
    const res = await SectionSchema.create(data);
    return res.toJSON();
  } catch (error) {
    return error.toJSON();
  }
};
const getSections = async () => {
  try {
    const res = await SectionSchema.findAll();
    const data = res.map((section) => section.dataValues);
    return data;
  } catch (error) {
    return error;
  }
};
const getSection = async (id) => {
  try {
    const section = await SectionSchema.findByPk(id);
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
    const section = await SectionSchema.findByPk(id);
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
    const section = await SectionSchema.findByPk(id);
    if (!section) {
      return { message: "Section not found" };
    }
    await section.destroy();
    return;
  } catch (error) {
    return error;
  }
};
const sequelize = require("../../api/dbConfig").db;
sequelize.sync().then(() => console.log("db is ready")).catch((err) => console.log(err));
let mainWindow;
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path__namespace.join(__dirname, "../../out/preload/preload.js"),
      webSecurity: false
    }
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
electron.ipcMain.handle("addUser", async (event, data) => {
  return addUser(data);
});
electron.ipcMain.handle("getAllUsers", async () => {
  return getUsers();
});
electron.ipcMain.handle("getUser", async (event, id) => {
  return getUser(id);
});
electron.ipcMain.handle("updateUser", async (event, id, data) => {
  return updateUser(id, data);
});
electron.ipcMain.handle("deleteUser", async (event, id) => {
  return removeUser(id);
});
electron.ipcMain.handle("addMembers", async (event, data) => {
  return addMembers(data);
});
electron.ipcMain.handle("addMember", async (event, data) => {
  return addMember(data);
});
electron.ipcMain.handle("getAllMembers", async () => {
  return readMembers();
});
electron.ipcMain.handle("getMember", async (event, id) => {
  return readMember(id);
});
electron.ipcMain.handle("updateMember", async (event, id, data) => {
  return patchMember(id, data);
});
electron.ipcMain.handle("deleteMember", async (event, id) => {
  return removeMember(id);
});
electron.ipcMain.handle("addMembership", async (event, data) => {
  return addMembership(data);
});
electron.ipcMain.handle("getAllMemberships", async () => {
  return getMemberships();
});
electron.ipcMain.handle("getMembership", async (event, id) => {
  return getMembership(id);
});
electron.ipcMain.handle("updateMembership", async (event, id, data) => {
  return updateMembership(id, data);
});
electron.ipcMain.handle("deleteMembership", async (event, id) => {
  return removeMembership(id);
});
electron.ipcMain.handle("addMaritalStatus", async (event, data) => {
  return addMaritalStatus(data);
});
electron.ipcMain.handle("getAllMaritalStatuses", async () => {
  return getMaritalStatuses();
});
electron.ipcMain.handle("getMaritalStatus", async (event, id) => {
  return getMaritalStatus(id);
});
electron.ipcMain.handle("updateMaritalStatus", async (event, id, data) => {
  return updateMaritalStatus(id, data);
});
electron.ipcMain.handle("deleteMaritalStatus", async (event, id) => {
  return removeMaritalStatus(id);
});
electron.ipcMain.handle("addSociety", async (event, data) => {
  return addSociety(data);
});
electron.ipcMain.handle("getAllSocieties", async () => {
  return getSocieties();
});
electron.ipcMain.handle("getSociety", async (event, id) => {
  return getSociety(id);
});
electron.ipcMain.handle("updateSociety", async (event, id, data) => {
  return updateSociety(id, data);
});
electron.ipcMain.handle("deleteSociety", async (event, id) => {
  return removeSociety(id);
});
electron.ipcMain.handle("addSection", async (event, data) => {
  return addSection(data);
});
electron.ipcMain.handle("getAllSections", async () => {
  return getSections();
});
electron.ipcMain.handle("getSection", async (event, id) => {
  return getSection(id);
});
electron.ipcMain.handle("updateSection", async (event, id, data) => {
  return updateSection(id, data);
});
electron.ipcMain.handle("deleteSection", async (event, id) => {
  return removeSection(id);
});
