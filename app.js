const electron = require("electron");

const main = () => {
  const mainWindow = new electron.BrowserWindow({
    width: 600,
    height: 800,
    title: "faceTune",
  });

  mainWindow.loadFile("./views/index.html");
};

electron.app.on("ready", () => {
  main();
});
