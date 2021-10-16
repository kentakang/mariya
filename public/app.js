"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var isDev = require("electron-is-dev");
var path = require("path");
var mainWindow;
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        width: 900,
        height: 400,
        center: true,
        resizable: true,
        fullscreen: false,
        fullscreenable: true,
        webPreferences: {
            nodeIntegration: true,
            devTools: isDev
        }
    });
    mainWindow.loadURL(isDev
        ? 'http://localhost:3000'
        : "file://" + path.join(__dirname, '../build/index.html'));
    mainWindow.setResizable(true);
    mainWindow.focus();
    mainWindow.on('closed', function () { return (mainWindow = undefined); });
    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
};
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform === 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
