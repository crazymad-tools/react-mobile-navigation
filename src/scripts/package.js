const path = require('path');
const nodeSass = require('node-sass');
const fs = require('fs');

const buildPath = path.resolve(__dirname, '../../package');
const sourcePath = path.resolve(__dirname, '../package');

/**
 * 复制文件夹
 * @param {String} sourcePath 
 * @param {String} destPath 
 */
function copyFold(sourcePath, destPath) {
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }

  let dir = fs.readdirSync(sourcePath);
  for (let name of dir) {
    let dest = path.resolve(destPath, name);
    let origin = path.resolve(sourcePath, name);
    let stat = fs.statSync(origin);
    if (stat.isDirectory()) {
      copyFold(origin, path.resolve(destPath, name))
    } else {
      fs.writeFileSync(dest, fs.readFileSync(origin));
    }
  }
}

/**
 * 复制必要的文件
 */
function copyNecessary() {
  let workfolder = path.resolve(sourcePath, '../../');
  ['package.json', 'README.md'].forEach((name) => {
    let origin = path.resolve(workfolder, name);
    let dest = path.resolve(buildPath, name);
    fs.writeFileSync(dest, fs.readFileSync(origin));
  });
}

/**
 * 编译scss
 */
function scssCompile() {
  nodeSass.render({
    file: path.resolve(sourcePath, 'index.scss')
  }, (err, result) => {
    if (err) {
      throw err;
    }

    let outputFile = path.resolve(buildPath, 'index.css');
    fs.writeFileSync(outputFile, result.css);
  });
}

copyFold(sourcePath, buildPath);
copyNecessary();
scssCompile();
