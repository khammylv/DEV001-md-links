const axios = require('axios');
const { getStatus } = require('../module/linkStatus')
jest.mock('axios');


describe('peticion axios', () => {
    const urls = [{ href: 'https://google.com' }, { href: 'https://khammylv.github.io/portafolio/' }];
    it('is a function', () => {
        expect(typeof getStatus).toBe('function');

    });
    it('is a functiomn', () => {
      
        axios.get.mockImplementationOnce(() => Promise.resolve({ status: 200 }));
        axios.get.mockImplementationOnce(() => Promise.reject({ response: { status: 404 } }));
        getStatus(urls).then((results) => {})
    });


});
