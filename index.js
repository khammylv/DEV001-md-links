// module.exports = () => {
//   // ...
// };



const { extractLinks } = require('./module/linksMD')
//const {   absolutePath } = require('./module/routesPath');
const { isMD } = require('./module/filesMd')

extractLinks(isMD('./prueba'))
 .then(res => console.log(res))
 .catch(err => console.error(err))
 //console.log(absolutePath('/user/bash/readme.md'))



// //console.log(isMD('./prueba/prueba.md'));
// console.log(isMD('./prueba'))