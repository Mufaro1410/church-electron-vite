import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import * as path from 'path';

let mainWindow;

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths[0];
  }
}

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
  ipcMain.handle('dialog:openFile', handleFileOpen);
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