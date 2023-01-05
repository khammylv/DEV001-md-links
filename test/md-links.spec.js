const { mdLinks } = require('../module/mdLinks');


describe('mdLinks', () => {

  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('retorna el contenido', () => {
    return expect(mdLinks('./prueba/name.txt')).resolves.toBe('hola mundo a todas desde TXT =)');
  });
  it('envia un error', () => {
    return expect(mdLinks('./pruebaa/name.txt')).rejects.toBe('ENOENT');
  });
});
