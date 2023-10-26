"use strict";
const electron = require("electron");
async function ipcRendering(method, path, data) {
  if (method === "send") {
    return electron.ipcRenderer.send(method, path, data);
  }
  return await electron.ipcRenderer.invoke(method, path, data);
}
electron.contextBridge.exposeInMainWorld("electronAPI", {
  rendering: (method, path, data) => ipcRendering(method, path, data),
  login: (data) => electron.ipcRenderer.invoke("login", data),
  resetPassword: () => electron.ipcRenderer.send("resetPassword"),
  logout: () => electron.ipcRenderer.send("logout"),
  close: () => electron.ipcRenderer.send("quit"),
  // for users
  createNewUser: (data) => electron.ipcRenderer.invoke("addUser", data),
  getUsers: () => electron.ipcRenderer.invoke("getUsers"),
  getUser: (id) => electron.ipcRenderer.invoke("getUser", id),
  updateUser: (id, data) => electron.ipcRenderer.invoke("updateUser", id, data),
  deleteUser: (id) => electron.ipcRenderer.invoke("deleteUser", id),
  // for members
  deleteMember: (id) => electron.ipcRenderer.invoke("deleteMember", id)
});
