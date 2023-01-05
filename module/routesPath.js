const path = require('path');
const fs = require('fs');
const absolutePath = (ruta) =>{
    // const relative = new RegExp('^(?:[a-z]+:)?//', 'i');
    // const resulRoutes = relative.test(ruta);
    const resulRoutes = path.isAbsolute(ruta);
    if(resulRoutes) {
     return ruta}
    else{
        return path.resolve(ruta);
    }
}

// const filesPath = (paths)=>{
//     return new Promise((resolve, reject) =>{
//         fs.stat(paths, (error, stats) => {
//         if(error){
//             reject(new Error('File not found')) 
//         }
//         resolve(stats.isFile())
//         });
//     });
   
// }
// const directPath = (paths) =>{
//     return new Promise((resolve, reject) =>{
//         fs.stat(paths, (error, stats) => {
//             if(error){
//                 reject(new Error('Directory not found'))
//             }
//             resolve(stats.isDirectory())
//             });
//      });
// }
const filesPath = (paths)=>{
    try{
         return fs.statSync(paths).isFile();
    }catch(err){
        new Error('File not found') 
    }
   
}
const directPath = (paths) =>{
    try{
        return fs.statSync(paths).isDirectory();
   }catch(err){
       new Error('Directory not found') 
   }
}

module.exports = {
    filesPath,
    directPath,
    absolutePath,
}