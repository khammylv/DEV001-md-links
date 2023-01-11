const { extractLinks } = require('./module/linksMD')
const { getStatus } = require('./module/linkStatus')
const {statsLinks, statsAndValidateLinks }  = require('./module/statValidate')

const mdLinks = (route, options) =>{
    return new Promise((resolve, reject) => {
     
    const regexVacia = /\s/g
    if(regexVacia.test(route)){
     reject('Please enter a path')
    }  
    
    extractLinks(route).then((res) => {
           const respuesta = res.flat()
           if(options === undefined) {
            resolve(respuesta)
           
           }  
           if(options.validate && options.stats){
            getStatus(respuesta)
            .then((res) => {
               resolve(statsAndValidateLinks(res))
            })
            .catch((err) => {
                reject(err)
            });
            return
           }
           if(options.validate){
            
             getStatus(respuesta)
             .then((res) => {
              resolve(res)
             })
             .catch((err) => {
                reject(err)
             });
             return
           } 
           if(options.stats){
               
                getStatus(respuesta)
                .then((res) => {
                   resolve(statsLinks(res))
                })
                .catch((err) => {
                    reject(err)
                });
             return   
           } 
           else {
            resolve(respuesta)
            return
           
           }
        
        }) 
        .catch((err) => {reject(err)}); 
    })
   
}
module.exports = {
    mdLinks
}

