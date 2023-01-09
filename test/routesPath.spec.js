const {  filesPath, directPath,  absolutePath } = require('../module/routesPath')

describe('absolutePath', () => {
    it('is a function', () => {
        expect(typeof absolutePath).toBe('function');
      });
      it('cambia la ruta a relativa', () => {
        expect(absolutePath('./prueba')).toEqual('D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba');
       }) 
       it('regresa la ruta', () => {
        expect(absolutePath('/user/bash/readme.md')).toEqual('/user/bash/readme.md');
       })    
});

describe('directPath', () => {
    it('is a function', () => {
        expect(typeof directPath).toBe('function');
      });
    it('devuelve true si es un directorio', () => {
     expect(directPath('./prueba')).toBe(true);
   
    })  
    it('devuelve error si es un directorio', () => {
      expect(directPath('/./prueba')).toEqual('Error: Directory not found');
     
     }) 
});

describe('filesPath', () => {
    it('is a function', () => {
        expect(typeof filesPath).toBe('function');
      });
      it('devuelve true si es un directorio', () => {
        expect(filesPath('./prueba/prueba.md')).toBe(true);
      
       })  
       it('devuelve error si es un directorio', () => {
         expect(filesPath('./prueba.md')).toEqual('Error: File not found');
        
        })   
});