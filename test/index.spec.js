const { mdLinks } = require('../index')
const { getStatus } = require('../module/linkStatus')
const { mocksData } = require('./__Mocks__/mocksData');


jest.mock('../module/linkStatus', () => {
  return {
    __esModule: true,
    getStatus: jest.fn()
  }
})


describe('mdLinks', () => {
  it('mdLinks should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
 
  it('debe retornar los links validados', () => {
    getStatus.mockResolvedValue(mocksData.validateTrue)
    return mdLinks(mocksData.filePath, { validate: true}).then((res) => {
      expect(res).toEqual(mocksData.validateTrue)
    })
  });
  
  it('debe retornar los links sin validar', () => {
    getStatus.mockResolvedValue(mocksData.validateFalse)
    return mdLinks(mocksData.filePath, { validate: false}).then((res) => {
      expect(res).toEqual(mocksData.validateFalse)
    })
  });
  
});