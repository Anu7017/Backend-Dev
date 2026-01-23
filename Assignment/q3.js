const fs = require("fs");
const path = require("path");

function sync(source, dest) {
  try {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);

    const files = fs.readdirSync(source);

    files.forEach(file => {
      const src = path.join(source, file);
      const dst = path.join(dest, file);

      if (!fs.existsSync(dst)) {
        fs.copyFileSync(src, dst);
        console.log("Copied:", file);
      }
    });
  } catch (err) {
    console.log("Error:", err.message);
  }
}

sync("source", "destination");
