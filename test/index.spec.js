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
  it('regex vacia', () => {
    return expect(mdLinks(' ')).rejects.toBe('Please enter a path');
  })
  it('options vacia', () => {
    return expect(mdLinks('./prueba')).rejects.toBe('Please enter a option');
  })
  it('Debe retornar objeto con estadística de links validados', () => {
    getStatus.mockResolvedValue(
      [
        {message: 'ok', status: 200, href: '4'},
        {message: 'ok', status: 200, href: '5'},
        {message: 'ok', status: 200, href: '6'}
      ]
    )
    return mdLinks(mocksData.filePath, { validate: true, stats: true }).then((res) => {
      expect(res).toEqual(mocksData.statsAndValidateData)
    })
  });
  it('debe retornar los links validados', () => {
    getStatus.mockResolvedValue(mocksData.validateTrue)
    return mdLinks(mocksData.filePath, { validate: true}).then((res) => {
      expect(res).toEqual(mocksData.validateTrue)
    })
  });
  it('debe retornar estadistica de links', () => {
    return mdLinks(mocksData.filePath, {stats: true }).then((res) => {
      expect(res).toEqual(mocksData.statsData)
    })
  });
  it('debe retornar los links sin validar', () => {
    getStatus.mockResolvedValue(mocksData.validateFalse)
    return mdLinks(mocksData.filePath, { validate: false}).then((res) => {
      expect(res).toEqual(mocksData.validateFalse)
    })
  });

  it('debe retornar un error', () => {
    getStatus.mockRejectedValue('Sorry an error has occurred')
    return mdLinks(mocksData.filePath, { validate: true}).catch((err) => {
      expect(err).toEqual('Sorry an error has occurred')
    })
  });
  it('debe retornar un error', () => {
    getStatus.mockRejectedValue('Sorry an error has occurred')
    return mdLinks(mocksData.filePath, {stats: true }).catch((err) => {
      expect(err).toEqual('Sorry an error has occurred')
    })
  });
  it('debe retornar un error', () => {
    getStatus.mockRejectedValue('Sorry an error has occurred')
    return mdLinks(mocksData.filePath, { validate: false}).catch((err) => {
      expect(err).toEqual('Sorry an error has occurred')
    })
  });
  it('debe retornar un error', () => {
    getStatus.mockRejectedValue('Sorry an error has occurred')
    return mdLinks(mocksData.filePath, { validate: true, stats: true }).catch((err) => {
      expect(err).toEqual('Sorry an error has occurred')
    })
  });
});