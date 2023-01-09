const { isMD } = require('../module/filesMd');


describe('isMd', () => {
    it('is a function', () => {
        expect(typeof isMD).toBe('function');
      });
      it('devuelve un array con las rutas del directorio', () => {
        expect(isMD('./prueba')).toEqual([
            'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\name.md',
            'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md'
          ]);
       }) 
    it('devuelve un array con la ruta del file', () => {
        expect(isMD('./prueba/prueba.md')).toEqual([
            'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md'
          ]);
    })    
});
