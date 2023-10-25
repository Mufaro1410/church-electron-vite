"use strict";
const electron = require("electron");
const path = require("path");
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
require("../../api/schemas/memberSchema");
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
electron.ipcMain.on("send", (event, path2, data) => {
  console.log("sending...", path2, data);
});
electron.ipcMain.handle("invoke", (event, path2, data) => {
  console.log("handling", path2, data);
});
electron.ipcMain.handle("statistics", async () => {
  console.log("stats");
});
