import { contextBridge , ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  login: (data) => ipcRenderer.invoke('login', data),
  resetPassword: () => ipcRenderer.send('resetPassword'),
  logout: () => ipcRenderer.send('logout'),
  close: () => ipcRenderer.send('quit'),
  // for users
  createNewUser: (data) => ipcRenderer.invoke('addUser', data),
  getUsers: () => ipcRenderer.invoke('getAllUsers'),
  getUser: (id) => ipcRenderer.invoke('getUser', id),
  updateUser: (id, data) =>
    ipcRenderer.invoke('updateUser', id, data),
  deleteUser: (id) => ipcRenderer.invoke('deleteUser', id),
  // for members
  createNewMembers: (data) => ipcRenderer.invoke('addMembers', data),
  createNewMember: (data) => ipcRenderer.invoke('addMember', data),
  getMembers: () => ipcRenderer.invoke('getAllMembers'),
  getMember: (id) => ipcRenderer.invoke('getMember', id),
  updateMember: (id, data) =>
    ipcRenderer.invoke('updateMember', id, data),
  deleteMember: (id) => ipcRenderer.invoke('deleteMember', id),
  // for memberships
  createNewMembership: (data) =>
    ipcRenderer.invoke('addMembership', data),
  getMemberships: () => ipcRenderer.invoke('getAllMemberships'),
  getMembership: (id) => ipcRenderer.invoke('getMembership', id),
  updateMembership: (id, data) =>
    ipcRenderer.invoke('updateMemberships', id, data),
  deleteMembership: (id) => ipcRenderer.invoke('deleteMembership', id),
  // for maritalStatus
  createNewMaritalStatus: (data) =>
    ipcRenderer.invoke('addMaritalStatus', data),
  getMaritalStatuses: () => ipcRenderer.invoke('getAllMaritalStatuses'),
  getMaritalStatus: (id) => ipcRenderer.invoke('getMaritalStatus', id),
  updateMaritalStatus: (id, data) =>
    ipcRenderer.invoke('updateMaritalStatus', id, data),
  deleteMaritalStatus: (id) =>
    ipcRenderer.invoke('deleteMaritalStatus', id),
  // for society
  createNewSociety: (data) => ipcRenderer.invoke('addSociety', data),
  getSocieties: () => ipcRenderer.invoke('getAllSocieties'),
  getSociety: (id) => ipcRenderer.invoke('getSociety', id),
  updateSociety: (id, data) =>
    ipcRenderer.invoke('updateSociety', id, data),
  deleteSociety: (id) => ipcRenderer.invoke('deleteSociety', id),
  // for section
  createNewSection: (data) => ipcRenderer.invoke('addSection', data),
  getSections: () => ipcRenderer.invoke('getAllSections'),
  getSection: (id) => ipcRenderer.invoke('getSection', id),
  updateSection: (id, data) =>
    ipcRenderer.invoke('updateSection', id, data),
  deleteSection: (id) => ipcRenderer.invoke('deleteSection', id),
  // for homepage
});