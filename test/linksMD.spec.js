const { extractLinks, reader} = require('../module/linksMD')

describe('reader', () => {

    it('is a function', () => {
      expect(typeof reader).toBe('function');
    });
  
    it('retorna el contenido', () => {
      return expect(reader('./prueba/name.md')).resolves.toBe('hola mundo a todas desde TXT =)');
    });
    it('envia un error', () => {
      return expect(reader('./pruebaa/name.md')).rejects.toBe('ENOENT');
    });
  });

  describe('extractLinks', () => {

    it('is a function', () => {
      expect(typeof extractLinks).toBe('function');
    });
  
    it('retorna un objeto con las propiedades del contenido', () => {
      return expect(extractLinks('./prueba/prueba.md')).resolves.toEqual([
        [{
            href: 'https://nodejs.org/api/path.html#pathextnamepath',
            text: 'nodeJS',
            file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md'
          },
          {
            href: 'https://www.youtube.com/watch?v=o85OkeVtm7k',
            text: 'Curso nodeJS - midudev',
            file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md'
          },
          {
            href: 'https://www.twitch.tv/midudev',
            text: 'Twitch',
            file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md'
          }]
        
      ]);
      });
    it('envia un error', () => {
      return expect(extractLinks('./pruebaa/name.md')).rejects.toBe('Sorry an error has occurred');
    });
  });

