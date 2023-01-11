const path = require('path');
const fs = require('fs');


const absolutePath = (ruta) =>{
    const resulRoutes = path.isAbsolute(ruta);
    if(resulRoutes) {
     return ruta}
    else{
        return path.resolve(ruta);
    }
    
   
}

const filesPath = (paths)=>{
    try{
         return fs.statSync(paths).isFile();
    }catch(err){
       return 'Error: File not found'
    }
   
}
const directPath = (paths) =>{
    try{
        return fs.statSync(paths).isDirectory();
   }catch(err){
    return 'Error: Directory not found'
   }
}

module.exports = {
    filesPath,
    directPath,
    absolutePath
}