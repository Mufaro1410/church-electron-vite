import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";

const sequelize = require("../../api/dbConfig").db;
// console.log(sequelize.models);

import { getStats } from "../../api/reports/statistics";

sequelize
  .sync()
  .then(() => console.log("db is ready"))
  .catch((err) => console.log(err));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Church Admin App",
    // fullscreen:true,
    // width: 800,
    // height: 600,
    webPreferences: {
      preload: path.join(__dirname, "../../out/preload/preload.js"),
      webSecurity: true,
    },
  });

  // Vite dev server URL
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.on("closed", () => (mainWindow = null));
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});

ipcMain.on("send", (event, path, data) => {
  console.log("sending...", path, data);
});

ipcMain.handle("invoke", (event, path, data) => {
  console.log("handling", path, data);
});

ipcMain.handle("statistics", async () => {
  console.log("stats");
});
