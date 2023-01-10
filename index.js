const { extractLinks } = require('./module/linksMD')
const { getStatus } = require('./module/linkStatus')

const {statsLinks, statsAndValidateLinks }  = require('./module/statValidate')

//const arrayLinks = isMD('./prueba2')
// getStatus('./prueba2')
//     .then(res => console.log(res))
//     .catch(err => console.error('Sorry an error has occurred'))
// extractLinks('./prueba')
//  .then(res => console.log(res.flat()))
//  .catch(err => console.error(err))
const funcPrueba = (pp, ff) =>{
    return new Promise((resolve, reject) => {
        extractLinks(pp).then((res) => {
            const respuesta = res.flat()
    
           if(ff === 'true'){
             getStatus(respuesta)
             .then((res) => {
                resolve(res)
             });
             //console.log(respuesta)
           }else{
            resolve(respuesta)
            //console.log(res.flat());
           }
            
           
        }) 
        .catch((err) => {reject(err)}); 
    })
   
}
funcPrueba('./prueba', 'false')
.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});
//  respuestaP('./prueba')
//  .then(res => console.log(res.flat()))
//  .catch(err => console.error(err)) 
//console.log(absolutePath('/user/bash/readme.md'))
//const { statsLinks, statsAndValidateLinks } = require('./module/statValidate')
//  getStatus('./prueba')
//  .then(res => console.log(statsLinks(res)))
//  .catch(err => console.error('Sorry an error has occurred'))

//  getStatus('./prueba')
//  .then(res => console.log(statsAndValidateLinks(res)))
//  .catch(err => console.error('Sorry an error has occurred'))
// //console.log(isMD('./prueba/prueba.md'));
// console.log(isMD('./prueba'))


// const {statsLinks, statsAndValidateLinks }  = require('./module/statValidate')

// console.log(statsLinks(obj))
// console.log(statsAndValidateLinks(obj))
// console.log(statsLinks(objFail))
// console.log(statsAndValidateLinks(objFail))
// // const promise = (ruta) => {
//     const arrayLinks = isMD(ruta)
//     return new Promise((resolve, reject) => {
//         getStatus(arrayLinks)
//             .then(res => {
                
//                 resolve(statsAndValidateLinks(res))
//             })
//             .catch(err => console.error('Sorry an error has occurred'))
//     })
// }

// promise('./prueba2')
//     .then(res => console.log(res))




// module.exports = () => {
//   // ...
// };
// const opciones = {validate: true}

// const mdLinks = (opciones) =>{
//     const arrayLinks = isMD()
//     console.log(opciones.validate)
  
// }

// mdLinks( opciones)