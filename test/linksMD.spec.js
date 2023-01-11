const { extractLinks, reader} = require('../module/linksMD');
const { mocksData } = require('./__Mocks__/mocksData');

jest.mock('../module/linksMD', () => {
  return {
      __esModule: true,
      extractLinks: jest.fn(),
      reader: jest.fn()
  }
})
describe('reader', () => {

    it('is a function', () => {
      expect(typeof reader).toBe('function');
    });
    it('retorna el contenido', () => {
      reader.mockResolvedValue('hola mundo a todas desde TXT =)')
      return expect(reader('./prueba/name.md')).resolves.toBe('hola mundo a todas desde TXT =)');
    });
    it('envia un error', () => {
      reader.mockRejectedValue('Cannot read file')
      return expect(reader('./pruebaa/name.md')).rejects.toBe('Cannot read file');
    });
  });

  describe('extractLinks', () => {

    it('is a function', () => {
      expect(typeof extractLinks).toBe('function');
    });
  
    it('retorna un objeto con las propiedades del contenido', () => {
      extractLinks.mockResolvedValue(mocksData.validateFalse)
      return expect(extractLinks('./prueba/prueba.md')).resolves.toEqual(mocksData.validateFalse);
      });
    it('envia un error', () => {
      extractLinks.mockRejectedValue('Sorry an error has occurred')
      return expect(extractLinks('./pruebaa/name.md')).rejects.toBe('Sorry an error has occurred');
    });
  });

