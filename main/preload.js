// preload.js (CommonJS)
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    // Example: listen for an IPC event
    on(channel, callback) {
        ipcRenderer.on(channel, callback);
    },

    // Example: send an IPC event
    send(channel, data) {
        ipcRenderer.send(channel, data);
    },

    // Add more functions as needed
});
