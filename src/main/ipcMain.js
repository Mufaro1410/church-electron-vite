import { addChurch, getChurch, updateChurch, deleteChurch } from '../../api/models/churchModel'
import { addUser, getUsers, getUser, updateUser, removeUser } from '../../api/models/usersModel'
import { addMembers, addMember, readMembers, readMember, patchMember, removeMember } from '../../api/models/memberModel'
import { addMaritalStatus, getMaritalStatuses, getMaritalStatus, updateMaritalStatus, removeMaritalStatus } from '../../api/models/maritalStatusModel'
import { addMembership, getMemberships, getMembership, updateMembership, removeMembership } from '../../api/models/membershipModel'
import { addSociety, getSocieties, getSociety, updateSociety, removeSociety } from '../../api/models/societyModel'
import { addSection, getSections, getSection, updateSection, removeSection } from '../../api/models/sectionModel'
import { getStats } from '../../api/reports/statistics'

export default async function ipcHandler(path, data) {
  switch (path) {
    // Reports cases
    case 'statistics':
      return await getStats()

    // User cases
    case 'addUser':
      return await addUser(data.data)
    case 'getUsers':
      return await getUsers()
    case 'getUser':
      return await getUser(data.id)
    case 'updateUser':
      return await updateUser(data.id, data.data)
    case 'deleteUser':
      return await removeUser(data.id)

    // Member cases
    case 'addMembers':
      return await addMembers(data.data)
    case 'addMember':
      return await addMember(data.data)
    case 'getMembers':
      return await readMembers()
    case 'getMember':
      return await readMember(data.id)
    case 'updateMember':
      return await patchMember(data.id, data.data)
    case 'deleteMember':
      return await removeMember(data.id)

    // Membership cases
    // case 'addMemberships':
    //   return await addMemberships(data.data)
    case 'addMembership':
      return await addMembership(data.data)
    case 'getMemberships':
      return await getMemberships()
    case 'getMembership':
      return await getMembership(data.id)
    case 'updateMembership':
      return await updateMembership(data.id, data.data)
    case 'deleteMembership':
      return await removeMembership(data.id)

    // Marital Status cases
    // case 'addMaritalStatuses':
    //   return await addMaritalStatuses(data.data)
    case 'addMaritalStatus':
      return await addMaritalStatus(data.data)
    case 'getMaritalStatuses':
      return await getMaritalStatuses()
    case 'getMaritalStatus':
      return await getMaritalStatus(data.id)
    case 'updateMaritalStatus':
      return await updateMaritalStatus(data.id, data.data)
    case 'deleteMaritalStatus':
      return await removeMaritalStatus(data.id)

    // Society cases
    // case 'addSocieties':
    //   return await addSocieties(data.data)
    case 'addSociety':
      return await addSociety(data.data)
    case 'getSocieties':
      return await getSocieties()
    case 'getSociety':
      return await getSociety(data.id)
    case 'updateSociety':
      return await updateSociety(data.id, data.data)
    case 'deleteSociety':
      return await removeSociety(data.id)

    // Sections cases
    // case 'addSections':
    //   return await addSections(data.data)
    case 'addSection':
      return await addSection(data.data)
    case 'getSections':
      return await getSections()
    case 'getSection':
      return await getSection(data.id)
    case 'updateSection':
      return await updateSection(data.id, data.data)
    case 'deleteSection':
      return await removeSection(data.id)
  
    default:
      break;
  }
}

// ipc commands for users
// ipcMain.handle('addUser', async (event, data) => {
//     return addUser(data);
//   });
  
  // ipcMain.handle('getAllUsers', async () => {
  //   return getUsers();
  // });
  
  // ipcMain.handle('getUser', async (event, id) => {
  //   return getUser(id);
  // });
  
  // ipcMain.handle('updateUser', async (event, id, data) => {
  //   return updateUser(id, data);
  // });
  
  // ipcMain.handle('deleteUser', async (event, id) => {
  //   return removeUser(id);
  // });
  
  // ipc commands for members
  // ipcMain.handle('addMembers', async (event, data) => {
  //   return addMembers(data);
  // });
  
  // ipcMain.handle('addMember', async (event, data) => {
  //   // console.log(data);
  //   return addMember(data);
  // });
  
  // ipcMain.handle('getAllMembers', async () => {
  //   return readMembers();
  // });
  
  // ipcMain.handle('getMember', async (event, id) => {
  //   return readMember(id);
  // });
  
  // ipcMain.handle('updateMember', async (event, id, data) => {
  //   return patchMember(id, data);
  // });
  
  // ipcMain.handle('deleteMember', async (event, id) => {
  //   return removeMember(id);
  // });
  
  // ipc commands for memberships
  // ipcMain.handle('addMembership', async (event, data) => {
  //   return addMembership(data);
  // });
  
  // ipcMain.handle('getAllMemberships', async () => {
  //   return getMemberships();
  // });
  
  // ipcMain.handle('getMembership', async (event, id) => {
  //   return getMembership(id);
  // });
  
  // ipcMain.handle('updateMembership', async (event, id, data) => {
  //   return updateMembership(id, data);
  // });
  
  // ipcMain.handle('deleteMembership', async (event, id) => {
  //   return removeMembership(id);
  // });
  
  // ipc commands for marital statuses
  // ipcMain.handle('addMaritalStatus', async (event, data) => {
  //   return addMaritalStatus(data);
  // });
  
  // ipcMain.handle('getAllMaritalStatuses', async () => {
  //   return getMaritalStatuses();
  // });
  
  // ipcMain.handle('getMaritalStatus', async (event, id) => {
  //   return getMaritalStatus(id);
  // });
  
  // ipcMain.handle('updateMaritalStatus', async (event, id, data) => {
  //   return updateMaritalStatus(id, data);
  // });
  
  // ipcMain.handle('deleteMaritalStatus', async (event, id) => {
  //   return removeMaritalStatus(id);
  // });
  
  // ipc commands for societies
  // ipcMain.handle('addSociety', async (event, data) => {
  //   return addSociety(data);
  // });
  
  // ipcMain.handle('getAllSocieties', async () => {
  //   return getSocieties();
  // });
  
  // ipcMain.handle('getSociety', async (event, id) => {
  //   return getSociety(id);
  // });
  
  // ipcMain.handle('updateSociety', async (event, id, data) => {
  //   return updateSociety(id, data);
  // });
  
  // ipcMain.handle('deleteSociety', async (event, id) => {
  //   return removeSociety(id);
  // });
  
  // ipc commands for sections
  // ipcMain.handle('addSection', async (event, data) => {
  //   return addSection(data);
  // });
  
  // ipcMain.handle('getAllSections', async () => {
  //   return getSections();
  // });
  
  // ipcMain.handle('getSection', async (event, id) => {
  //   return getSection(id);
  // });
  
  // ipcMain.handle('updateSection', async (event, id, data) => {
  //   return updateSection(id, data);
  // });
  
  // ipcMain.handle('deleteSection', async (event, id) => {
  //   return removeSection(id);
  // });
  
  // ipcMain.handle('statistics', async () => {
  //   return getStats()
  // })