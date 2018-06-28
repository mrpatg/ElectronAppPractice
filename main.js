const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Wait for app to be ready

app.on('ready', function(){
    // create new window
    mainWindow = new BrowserWindow({});
    // load html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Build menu from template
    const mainmenu = Menu.buildFromTemplate(mainmenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

// make menu template
const mainMenuTemplate = [
    {
        label:'File'
    }
]