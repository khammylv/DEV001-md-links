const fs = require('fs');
const path = require('path');

const readFiles = (arrayFilms) =>{
  let arreglos = arrayFilms.map(filesmd =>{
    return filesmd;
  })
 
  return arreglos;
}
const reader=  (paths) =>{ 

  return new Promise((resolve, reject) =>{
    fs.readFile(paths, 'utf8', (err, data) =>{
        if (err){
            reject(err.code);
        }
        resolve(data);
    })
  })
 
//paths, data
}
const extractLinks = (mdObject)=>{
  return new Promise((resolve, reject) =>{
    let links = [];
    mdObject.forEach((mdFiles)=>{
      reader(mdFiles).then((results)=>{
        const regex = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
        let match = regex.exec(results)
         if(match !== null){
          console.log(match)
          links.push({
            href: match[2],
            text: match[1],
            file: mdFiles,
          });
          match = regex.exec(data);
        }
        resolve(links)
      })
      .catch((err)=>{
        reject(err)  
      })
    })
   
  })
}

module.exports = {
    readFiles,
    extractLinks
}
