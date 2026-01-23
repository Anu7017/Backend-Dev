const fs = require('fs').promises;
const path = require('path');

const sourceDir = './uploads';
const backupDir = './backup';
const logFile = './backup.log';

const DAYS_7 = 7 * 24 * 60 * 60 * 1000;

async function log(message) {
  await fs.appendFile(logFile, message + '\n');
}

async function backupAndClean() {
  try {
    // create backup folder if not exists
    await fs.mkdir(backupDir, { recursive: true });

    const files = await fs.readdir(sourceDir);

    for (let file of files) {
      const filePath = path.join(sourceDir, file);
      const stats = await fs.stat(filePath);

      // backup file
      const time = Date.now();
      const backupFile = path.join(backupDir, `${time}_${file}`);
      await fs.copyFile(filePath, backupFile);
      await log(`Backup created: ${file}`);

      // delete old files
      const now = Date.now();
      if (now - stats.mtimeMs > DAYS_7) {
        await fs.unlink(filePath);
        await log(`Deleted old file: ${file}`);
      }
    }
  } catch (err) {
    await log(`Error: ${err.message}`);
  }
}

backupAndClean();
