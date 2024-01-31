const { ipcMain } = require('electron')


ipcMain.handle('ping', () => 'pong');



module.exports = ipcMain;