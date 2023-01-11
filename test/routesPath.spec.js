const { filesPath, directPath, absolutePath } = require('../module/routesPath')
jest.mock('../module/routesPath', () => {
  return {
      __esModule: true,
      absolutePath: jest.fn(),
      filesPath: jest.fn(),
      directPath: jest.fn(),

  }
})

describe('absolutePath', () => {
  it('is a function', () => {
      expect(typeof absolutePath).toBe('function');
  });
  it('cambia la ruta a relativa', () => {
      absolutePath.mockReturnValueOnce('D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba')
      expect(absolutePath('./prueba')).toEqual('D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba');
  })
  it('regresa la ruta', () => {
      absolutePath.mockReturnValueOnce('/user/bash/readme.md')
      expect(absolutePath('/user/bash/readme.md')).toEqual('/user/bash/readme.md');
  })
});
describe('directPath', () => {
  it('is a function', () => {
    expect(typeof directPath).toBe('function');
  });
  it('devuelve true si es un directorio', () => {
    directPath.mockReturnValueOnce(true)
    expect(directPath('./prueba')).toBe(true);

  })
  it('devuelve error si no es un directorio', () => {
    directPath.mockReturnValueOnce('Error: Directory not found')
    expect(directPath('/./prueba')).toEqual('Error: Directory not found');

  })
});

describe('filesPath', () => {
  it('is a function', () => {
    expect(typeof filesPath).toBe('function');
  });
  it('devuelve true si es un directorio', () => {
    filesPath.mockReturnValueOnce(true)
    expect(filesPath('./prueba/prueba.md')).toBe(true);

  })
  it('devuelve error si no es un directorio', () => {
    filesPath.mockReturnValueOnce('Error: File not found')
    expect(filesPath('./prueba.md')).toEqual('Error: File not found');

  })
});

