const { extractLinks } = require('./linksMD')
const axios = require("axios");


const getStatus = (objectStatus) => {
    return new Promise((resolve) => {
        extractLinks(objectStatus).then((linksArray) => {
            const linksArrayFlat = linksArray.flat();
            let links = linksArrayFlat.map((link) => {
                return axios
                    .get(link.href, {
                        headers: { "Accept-Encoding": "gzip,deflate,compress" },
                    })
                    .then((response) => {
                        const status = response.status;
                        return { ...link, status: status, message: "ok" };
                    })
                    .catch((error) => {
                        const errorStatus = error.response.status;
                        return { ...link, status: errorStatus, message: "fail" };
                    })
            });

            resolve(Promise.all(links))
        })
        
    })
}


module.exports = {
    getStatus
}