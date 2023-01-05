const fs = require('fs');
const mdLinks = (paths) =>{
  return new Promise((resolve, reject) =>{
    fs.readFile(paths, 'utf8', (err, data) =>{
        if (err){
            reject(err.code);
        }
        resolve(data);
    })
  })
}

module.exports = {
    mdLinks
}
