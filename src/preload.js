const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('back', {
  ping: () => ipcRenderer.invoke('ping')
})