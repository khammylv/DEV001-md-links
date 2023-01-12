const { extractLinks } = require('./module/linksMD')
const { getStatus } = require('./module/linkStatus')


const mdLinks = (route, options) => {
    return new Promise((resolve, reject) => {
        extractLinks(route).then((res) => {
            const respuesta = res.flat()
            if (options === undefined) {
                resolve(respuesta)
                return
            }
            if (options.validate === true) {
                getStatus(respuesta).then((status) => {
                    resolve(status)
                })
                return
            }
            if (options.validate === false) {
                resolve(respuesta)
                return
            }

        }).catch((err) => { reject(err) });

    })

}
module.exports = {
    mdLinks
}
