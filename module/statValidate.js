const statsLinks = (linksArray) => {
    return {
      'Total': linksArray.length,
      'Unique': new Set(linksArray.map((linkObject) => linkObject.href)).size
    }
}
const statsAndValidateLinks = (linksArray) => {
    const broken = linksArray.filter((links) => links.message === 'fail').length;
    return {
      'Total': linksArray.length,
      'Unique': new Set(linksArray.map((linkObject) => linkObject.href)).size,
      'Broken': broken
    }
}
module.exports = {
    statsLinks,
    statsAndValidateLinks
}