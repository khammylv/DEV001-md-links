#!/usr/bin/env node
const { mdLinks } = require('./index')

const [, , ...args] = process.argv;



const options = {
    validate: args.includes("--validate"),
    stats : args.includes("--stats"),
}

mdLinks(args[0], options )
.then((res) => {
    
    if(!options.validate && !options.stats){
        res.forEach(element => {
           console.log( `${element.file} ${element.href} ${element.text}`)
        });
        return
       }
    if (options.validate && options.stats) {
        console.log(`Total: ${res.Total} \nUnique: ${res.Unique} \nBroken: ${res.Broken}`)
        return
     }
    if(options.validate){
     res.forEach(element => {
        console.log( `${element.file} ${element.href} ${element.message} ${element.status} ${element.text}`)
     });
     return
    }
    if(options.stats){
        console.log(`Total: ${res.Total}\nUnique: ${res.Unique}`)
        return
    }
   
})
.catch((err) => {console.error(err)});

