const { extractLinks } = require('./module/linksMD')
const { isMD } = require('./module/filesMd')
//const {   absolutePath } = require('./module/routesPath');
const { getStatus } = require('./module/linkStatus')

// getStatus('./prueba')
//     .then(res => console.log(res))
//     .catch(err => console.error('Sorry an error has occurred'))
// extractLinks('./prueba')
//  .then(res => console.log(res.flat()))
//  .catch(err => console.error(err))

//  respuestaP('./prueba')
//  .then(res => console.log(res.flat()))
//  .catch(err => console.error(err)) 
//console.log(absolutePath('/user/bash/readme.md'))
const { statsLinks, statsAndValidateLinks } = require('./module/statValidate')
//  getStatus('./prueba')
//  .then(res => console.log(statsLinks(res)))
//  .catch(err => console.error('Sorry an error has occurred'))

//  getStatus('./prueba')
//  .then(res => console.log(statsAndValidateLinks(res)))
//  .catch(err => console.error('Sorry an error has occurred'))
// //console.log(isMD('./prueba/prueba.md'));
// console.log(isMD('./prueba'))


// const promise = (ruta) => {
//     return new Promise((resolve, reject) => {
//         getStatus(ruta)
//             .then(res => {
//                 resolve(statsAndValidateLinks(res))
//             })
//             .catch(err => console.error('Sorry an error has occurred'))
//     })
// }

// promise('./prueba')
//     .then(res => console.log(res))




// module.exports = () => {
//   // ...
// };
const opciones = {validate: true}

const mdLinks = (opciones) =>{
    // const arrayLinks = isMD()
    console.log(opciones.validate)
  
}

mdLinks( opciones)