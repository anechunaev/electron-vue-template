import { app, screen, BrowserWindow } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import * as AppUrl from './lib/url';
import { handleCustomProtocol } from './lib/protocol';
import pkg from '../package.json';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

handleCustomProtocol(__dirname);

app.whenReady().then(() => {
	const mainWindow = new BrowserWindow({
		title: pkg.app?.defaultTitle ?? 'Main Window',
		autoHideMenuBar: true,
		minWidth: 800,
		minHeight: 600,
		width: screen.getPrimaryDisplay().workAreaSize.width * 0.8,
		height: screen.getPrimaryDisplay().workAreaSize.height * 0.8,
		icon: path.join(__dirname, '../assets/icons/desktop.png'),
		webPreferences: {
			nodeIntegration: false,
			sandbox: true,
			contextIsolation: true,
			webSecurity: true,
			allowRunningInsecureContent: false,
		},
	});
	mainWindow.loadURL(AppUrl.screen('home'));
});
