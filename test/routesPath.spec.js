const {  filesPath, directPath,  absolutePath } = require('../module/routesPath')

describe('absolutePath', () => {
    it('is a function', () => {
        expect(typeof absolutePath).toBe('function');
      });
});

describe('directPath', () => {
    it('is a function', () => {
        expect(typeof directPath).toBe('function');
      });
});

describe('filesPath', () => {
    it('is a function', () => {
        expect(typeof filesPath).toBe('function');
      });
});