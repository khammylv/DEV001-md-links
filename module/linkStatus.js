const { extractLinks } = require('./linksMD')
const axios = require("axios");

const getStatus = (objectStatus) => {
    const links = objectStatus.map((link) => {
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
    return Promise.all(links)
}
module.exports = {
    getStatus
}