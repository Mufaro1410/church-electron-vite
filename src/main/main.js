import { app, BrowserWindow, ipcMain} from 'electron';
import * as path from 'path';

const sequelize = require('../../api/dbConfig').db

import { addUser, getUsers, getUser, updateUser, removeUser } from '../../api/models/usersModel'
import { addMembers, addMember, readMembers, readMember, patchMember, removeMember } from '../../api/models/memberModel'
import { addMaritalStatus, getMaritalStatuses, getMaritalStatus, updateMaritalStatus, removeMaritalStatus } from '../../api/models/maritalStatusModel'
import { addMembership, getMemberships, getMembership, updateMembership, removeMembership } from '../../api/models/membershipModel'
import { addSociety, getSocieties, getSociety, updateSociety, removeSociety } from '../../api/models/societyModel'
import { addSection, getSections, getSection, updateSection, removeSection } from '../../api/models/sectionModel'
import { getStats } from '../../api/reports/statistics'

sequelize.sync().then(() => console.log('db is ready')).catch((err) => console.log(err))

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../../out/preload/preload.js'),
      webSecurity: false,
    },
  });

  // Vite dev server URL
  mainWindow.loadURL('http://localhost:5173');
  mainWindow.on('closed', () => mainWindow = null);
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow == null) {
    createWindow();
  }
});

// ipc commands for users
ipcMain.handle('addUser', async (event, data) => {
  return addUser(data);
});

ipcMain.handle('getAllUsers', async () => {
  return getUsers();
});

ipcMain.handle('getUser', async (event, id) => {
  return getUser(id);
});

ipcMain.handle('updateUser', async (event, id, data) => {
  return updateUser(id, data);
});

ipcMain.handle('deleteUser', async (event, id) => {
  return removeUser(id);
});

// ipc commands for members
ipcMain.handle('addMembers', async (event, data) => {
  return addMembers(data);
});

ipcMain.handle('addMember', async (event, data) => {
  // console.log(data);
  return addMember(data);
});

ipcMain.handle('getAllMembers', async () => {
  return readMembers();
});

ipcMain.handle('getMember', async (event, id) => {
  return readMember(id);
});

ipcMain.handle('updateMember', async (event, id, data) => {
  return patchMember(id, data);
});

ipcMain.handle('deleteMember', async (event, id) => {
  return removeMember(id);
});

// ipc commands for memberships
ipcMain.handle('addMembership', async (event, data) => {
  return addMembership(data);
});

ipcMain.handle('getAllMemberships', async () => {
  return getMemberships();
});

ipcMain.handle('getMembership', async (event, id) => {
  return getMembership(id);
});

ipcMain.handle('updateMembership', async (event, id, data) => {
  return updateMembership(id, data);
});

ipcMain.handle('deleteMembership', async (event, id) => {
  return removeMembership(id);
});

// ipc commands for marital statuses
ipcMain.handle('addMaritalStatus', async (event, data) => {
  return addMaritalStatus(data);
});

ipcMain.handle('getAllMaritalStatuses', async () => {
  return getMaritalStatuses();
});

ipcMain.handle('getMaritalStatus', async (event, id) => {
  return getMaritalStatus(id);
});

ipcMain.handle('updateMaritalStatus', async (event, id, data) => {
  return updateMaritalStatus(id, data);
});

ipcMain.handle('deleteMaritalStatus', async (event, id) => {
  return removeMaritalStatus(id);
});

// ipc commands for societies
ipcMain.handle('addSociety', async (event, data) => {
  return addSociety(data);
});

ipcMain.handle('getAllSocieties', async () => {
  return getSocieties();
});

ipcMain.handle('getSociety', async (event, id) => {
  return getSociety(id);
});

ipcMain.handle('updateSociety', async (event, id, data) => {
  return updateSociety(id, data);
});

ipcMain.handle('deleteSociety', async (event, id) => {
  return removeSociety(id);
});

// ipc commands for sections
ipcMain.handle('addSection', async (event, data) => {
  return addSection(data);
});

ipcMain.handle('getAllSections', async () => {
  return getSections();
});

ipcMain.handle('getSection', async (event, id) => {
  return getSection(id);
});

ipcMain.handle('updateSection', async (event, id, data) => {
  return updateSection(id, data);
});

ipcMain.handle('deleteSection', async (event, id) => {
  return removeSection(id);
});

ipcMain.handle('statistics', async () => {
  return getStats()
})
