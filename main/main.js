// main.js (ESM version)

import { app, BrowserWindow } from "electron";
import path from "path";
import serve from "electron-serve";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ---------------------------------------------------------------------
// Recreate __dirname and __filename in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// ---------------------------------------------------------------------

// Serve your built assets if app is packaged (i.e., in production)
const appServe = app.isPackaged
    ? serve({
        directory: path.join(__dirname, "../out"),
    })
    : null;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Point to your preload script in ESM-friendly way
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // If app is packaged, load built files (served by electron-serve)
    if (app.isPackaged) {
        appServe(win).then(() => {
            win.loadURL("app://-");
        });
    }
    // Otherwise, assume you’re in dev mode and point to localhost
    else {
        win.loadURL("http://localhost:3000");
        win.webContents.openDevTools();
        win.webContents.on("did-fail-load", () => {
            win.webContents.reloadIgnoringCache();
        });
    }
};

// When Electron is ready, create the BrowserWindow
app.on("ready", createWindow);

// On macOS, apps conventionally stay open until the user explicitly quits
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
