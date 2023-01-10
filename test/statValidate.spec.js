const { statsLinks, statsAndValidateLinks } = require('../module/statValidate')
const obj = [
    {
        href: 'https://nodejs.org/api/path.html#pathextnamepath',
        text: 'nodeJS',
        file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://www.youtube.com/watch?v=o85OkeVtm7k',
        text: 'Curso nodeJS - midudev',
        file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://www.twitch.tv/midudev',
        text: 'Twitch',
        file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba\\prueba.md',
        status: 200,
        message: 'ok'
    }
]
const objFail = [
    {
        href: 'https://nodejs.org/api/path.html#pathextnamepath',
        text: 'nodeJS',
        file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba2\\prueba.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://www.youtube.com/watch?v=o85OkeVtm7k',
        text: 'Curso nodeJS - midudev',
        file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba2\\prueba.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://khammylv.github.io/portafolio/',
        text: 'Twitch',
        file: 'D:\\proyectos Web\\laboratoria\\proyectoCuatro\\DEV001-md-links\\prueba2\\prueba.md',
        status: 404,
        message: 'fail'
    }
]

describe('statsLinks', () => {
    it('is a function', () => {
        expect(typeof statsLinks).toBe('function');
    });
    it('stat active', () => {
        expect(statsLinks(obj)).toEqual({ Total: 3, Unique: 3 });
    });

});
describe('statsAndValidateLinks', () => {
    it('is a function', () => {
        expect(typeof statsAndValidateLinks).toBe('function');
    });
    it('atatv', () => {
        expect(statsAndValidateLinks(obj)).toEqual({ Total: 3, Unique: 3, Broken: 0 });
    });
    it('con link fail', () => {
        expect(statsAndValidateLinks(objFail)).toEqual({ Total: 3, Unique: 3, Broken: 1 });
    });
});
