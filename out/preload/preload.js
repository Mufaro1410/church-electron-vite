"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electronAPI", {
  login: (data) => electron.ipcRenderer.invoke("login", data),
  resetPassword: () => electron.ipcRenderer.send("resetPassword"),
  logout: () => electron.ipcRenderer.send("logout"),
  close: () => electron.ipcRenderer.send("quit"),
  // for users
  createNewUser: (data) => electron.ipcRenderer.invoke("addUser", data),
  getUsers: () => electron.ipcRenderer.invoke("getAllUsers"),
  getUser: (id) => electron.ipcRenderer.invoke("getUser", id),
  updateUser: (id, data) => electron.ipcRenderer.invoke("updateUser", id, data),
  deleteUser: (id) => electron.ipcRenderer.invoke("deleteUser", id),
  // for members
  createNewMembers: (data) => electron.ipcRenderer.invoke("addMembers", data),
  createNewMember: (data) => electron.ipcRenderer.invoke("addMember", data),
  getMembers: () => electron.ipcRenderer.invoke("getAllMembers"),
  getMember: (id) => electron.ipcRenderer.invoke("getMember", id),
  updateMember: (id, data) => electron.ipcRenderer.invoke("updateMember", id, data),
  deleteMember: (id) => electron.ipcRenderer.invoke("deleteMember", id),
  // for memberships
  createNewMembership: (data) => electron.ipcRenderer.invoke("addMembership", data),
  getMemberships: () => electron.ipcRenderer.invoke("getAllMemberships"),
  getMembership: (id) => electron.ipcRenderer.invoke("getMembership", id),
  updateMembership: (id, data) => electron.ipcRenderer.invoke("updateMemberships", id, data),
  deleteMembership: (id) => electron.ipcRenderer.invoke("deleteMembership", id),
  // for maritalStatus
  createNewMaritalStatus: (data) => electron.ipcRenderer.invoke("addMaritalStatus", data),
  getMaritalStatuses: () => electron.ipcRenderer.invoke("getAllMaritalStatuses"),
  getMaritalStatus: (id) => electron.ipcRenderer.invoke("getMaritalStatus", id),
  updateMaritalStatus: (id, data) => electron.ipcRenderer.invoke("updateMaritalStatus", id, data),
  deleteMaritalStatus: (id) => electron.ipcRenderer.invoke("deleteMaritalStatus", id),
  // for society
  createNewSociety: (data) => electron.ipcRenderer.invoke("addSociety", data),
  getSocieties: () => electron.ipcRenderer.invoke("getAllSocieties"),
  getSociety: (id) => electron.ipcRenderer.invoke("getSociety", id),
  updateSociety: (id, data) => electron.ipcRenderer.invoke("updateSociety", id, data),
  deleteSociety: (id) => electron.ipcRenderer.invoke("deleteSociety", id),
  // for section
  createNewSection: (data) => electron.ipcRenderer.invoke("addSection", data),
  getSections: () => electron.ipcRenderer.invoke("getAllSections"),
  getSection: (id) => electron.ipcRenderer.invoke("getSection", id),
  updateSection: (id, data) => electron.ipcRenderer.invoke("updateSection", id, data),
  deleteSection: (id) => electron.ipcRenderer.invoke("deleteSection", id)
  // for homepage
});
