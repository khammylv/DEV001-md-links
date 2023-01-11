const { statsLinks, statsAndValidateLinks } = require('../module/statValidate')
const { mocksData } = require('./__Mocks__/mocksData');

describe('statsLinks', () => {
    it('is a function', () => {
        expect(typeof statsLinks).toBe('function');
    });
    it('stat active', () => {
        expect(statsLinks(mocksData.validateTrue)).toEqual({ Total: 3, Unique: 3 });
    });

});
describe('statsAndValidateLinks', () => {
    it('is a function', () => {
        expect(typeof statsAndValidateLinks).toBe('function');
    });
    it('atatv', () => {
        expect(statsAndValidateLinks(mocksData.validateTrue)).toEqual({ Total: 3, Unique: 3, Broken: 0 });
    });
    it('con link fail', () => {
        expect(statsAndValidateLinks(mocksData.validateTrueLinkFalse)).toEqual({ Total: 3, Unique: 3, Broken: 1 });
    });
});
