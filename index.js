// module.exports = () => {
//   // ...
// };



const { extractLinks, respuestaP } = require('./module/linksMD')
//const {   absolutePath } = require('./module/routesPath');
const { isMD } = require('./module/filesMd')

extractLinks('./prueba/prueba.md')
 .then(res => console.log(res.flat()))
 .catch(err => console.error(err))

//  respuestaP('./prueba')
//  .then(res => console.log(res.flat()))
//  .catch(err => console.error(err)) 
 //console.log(absolutePath('/user/bash/readme.md'))

 console.log(isMD('D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\readme.md'))


// //console.log(isMD('./prueba/prueba.md'));
// console.log(isMD('./prueba'))