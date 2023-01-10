const path = require('path');
const fs = require('fs');
const { filesPath, directPath, absolutePath } = require('./routesPath');
const isMD = (paths) => {

    const isAbsolute = absolutePath(paths);
    let fileList = [];
    if (path.extname(isAbsolute) === '.md') {
        if (filesPath(isAbsolute)) {
            fileList.push(isAbsolute);
        }
    } else {
        if (directPath(isAbsolute)) {
            const directFiles = fs.readdirSync(isAbsolute, 'utf8');
            directFiles.forEach((file) => {
                let pathnew = path.join(isAbsolute, file);
                fileList = [...fileList, ...isMD(pathnew)]
            });
        }

    }
    return fileList




}

module.exports = {
    isMD
}
