import { app, BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let mainWindow: BrowserWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
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

    mainWindow.loadURL(
        isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.setResizable(true);
    mainWindow.focus();

    mainWindow.on('closed', () => (mainWindow = undefined!));

    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform === 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
})