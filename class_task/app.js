const getSystemInfo = require("./systemInfo");
const logData = require("./logger");

setInterval(() => {
  const info = getSystemInfo();
  logData(info);
  console.log("System info logged...");
}, 5000);