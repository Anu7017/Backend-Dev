const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "system-log.txt");

function logData(data) {
  const log = `${new Date().toLocaleString()} | CPU: ${data.cpuCount} | FreeMem: ${data.freeMemory} | TotalMem: ${data.totalMemory} | Platform: ${data.platform}\n`;

  fs.appendFile(logPath, log, (err) => {
    if (err) console.log("Log Error");
  });
}

module.exports = logData;