#!/usr/bin/env node
const { mdLinks } = require('./index')
const { statsLinks, statsAndValidateLinks } = require('./module/statValidate')

const filePath = process.argv[2]
const argv = process.argv

const cli = (filePath, argv) => {
    const validate = argv.includes("--validate");
    const stats = argv.includes("--stats");
    if (filePath === undefined) {
        console.log("😱 Please enter a path")
    }
    if (stats && validate) {
        mdLinks(filePath, { validate: true })
            .then((results) => {
                const statVal = statsAndValidateLinks(results)
                console.log(`Total: ${statVal.Total} \nUnique: ${statVal.Unique} \nBroken: ${statVal.Broken}`)
            })
            .catch((err) => { console.log(err) })
    }
    if (argv.length <= 3) {
        mdLinks(filePath, { validate: false }).then((results) => {
            results.forEach(element => {
                console.log(`${element.file} ${element.href} ${element.text}`)
            });
        })
            .catch((err) => { console.log(err) })
    }
    if (validate) {
        mdLinks(filePath, { validate: true })
            .then((res) => {
                res.forEach(element => {
                    console.log(`${element.file} ${element.href} ${element.message} ${element.status} ${element.text}`)
                });
            })
            .catch((err) => { console.log(err) })

    }
    if (stats) {
        mdLinks(filePath, { validate: true })
            .then((results) => {

                const res = statsLinks(results)
                console.log(`Total: ${res.Total}\nUnique: ${res.Unique}`)
            })
            .catch((err) => { console.log(err) })
    }
   if(argv !== '--stats' && argv !== '--validate' && argv !== undefined){
    console.log('😔 Your option is not valid, try using --validate, --stats o --stats --validate')
   }
}

cli(filePath, argv)