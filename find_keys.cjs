const fs = require("fs");
const path = require("path");

function findTCalls(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      findTCalls(path.join(dir, file), fileList);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const files = findTCalls("./src");
const keys = new Set();
const regex = /\bt\((['"`])(.*?)\1/g;

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[2]);
  }
}

console.log("Found keys in code:", keys.size);
fs.writeFileSync("found-keys.json", JSON.stringify([...keys], null, 2));
