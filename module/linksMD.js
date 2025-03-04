const fs = require('fs');
const path = require('path');
const { isMD } = require('./filesMd')
const reader=  (paths) =>{ 
  return new Promise((resolve, reject) =>{
    fs.readFile(paths, 'utf8', (err, data) =>{
        if (err){
            reject('Cannot read file');
        }
        resolve(data);
    })
  })
}
const extractLinks = (mdobject)=>{
  const mdObject = isMD(mdobject);
  let promisesGetLinks = [];
  mdObject.forEach((mdFiles)=>{
    promisesGetLinks.push(
      new Promise((resolve, reject) =>{
        let links = [];
        reader(mdFiles).then((results)=>{
          const regex = /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
          let match = regex.exec(results)
          
          while(match !== null) {
            links.push({
            href: match[2],
            text: match[1],
            file: mdFiles,
           });
          match = regex.exec(results)
          }
          
          resolve(links)
        })
        .catch((err)=>{reject('Sorry an error has occurred')})
      })
    )
  })
   
 return Promise.all(promisesGetLinks);
}
module.exports = {
    extractLinks,
    reader
}
