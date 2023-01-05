// module.exports = () => {
//   // ...
// };


// const { mdLinks } = require('./module/mdLinks');
// mdLinks('./prueba/name.txt')
//   .then((results) => console.log(results))
//   .catch(err => console.error(`Error: ${err}`))

//   mdLinks('./prueba/prueba.md')
//   .then((results) => console.log(results))
//   .catch(err => console.error(`Error: ${err} `))

// const { filesPath, directPath,  absolutePath } = require('./module/routesPath');

// directPath('./prueba')
// .then((results) => console.log(results))
// .catch(err => console.error(`Error: ${err} `))

// directPath('./prueba/prueba.md')
// .then((results) => console.log(results))
// .catch(err => console.error(`Error: ${err} `))

// filesPath('./prueba')
// .then((results) => console.log(results))
// .catch(err => console.error(`Error: ${err} `))

// filesPath('./prueba/prueba.md')
// .then((results) => console.log(results))
// .catch(err => console.error(`Error: ${err} `))

const { isMD } = require('./module/filesMd')

//console.log(isMD('./prueba/prueba.md'));
console.log(isMD('./prueba'))