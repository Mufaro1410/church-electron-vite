import { contextBridge , ipcRenderer } from 'electron'

async function ipcRendering(method, path, data) {
  if (method === 'send') {
    // console.log(method, path, data);
    return ipcRenderer.send(method, path, data)
  }
  // console.log(method, path, data);
  return await ipcRenderer.invoke(method, path, data)
}

contextBridge.exposeInMainWorld('electronAPI', {

  rendering: (method, path, data) => ipcRendering(method, path, data),

  login: (data) => ipcRenderer.invoke('login', data),
  resetPassword: () => ipcRenderer.send('resetPassword'),
  logout: () => ipcRenderer.send('logout'),
  close: () => ipcRenderer.send('quit'),
  // for users
  createNewUser: (data) => ipcRenderer.invoke('addUser', data),
  getUsers: () => ipcRenderer.invoke('getUsers'),
  getUser: (id) => ipcRenderer.invoke('getUser', id),
  updateUser: (id, data) => ipcRenderer.invoke('updateUser', id, data),
  deleteUser: (id) => ipcRenderer.invoke('deleteUser', id),
  // for members
  deleteMember: (id) => ipcRenderer.invoke('deleteMember', id),
});