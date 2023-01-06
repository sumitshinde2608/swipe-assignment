const electron = require("electron");

const app = electron.app; // electron module
const BrowserWindow = electron.BrowserWindow; //enables UI

let win;

app.on("ready", (_) => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL("https://app.getswipe.in/"); // loads this URL
});
