// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  mainWindow.maximize();
  mainWindow.loadURL(`file://${__dirname}/container/index.html`)

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)
 
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
 
