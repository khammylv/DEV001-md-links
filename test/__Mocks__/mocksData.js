const mocksData = {
    filePath: './prueba',
    validateFalse : [{
        href: 'https://nodejs.org/api/path.html#pathextnamepath',
        text: 'nodeJS',
        file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba\\prueba.md'
      },
      {
        href: 'https://www.youtube.com/watch?v=o85OkeVtm7k',
        text: 'Curso nodeJS - midudev',
        file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba\\prueba.md'
      },
      {
        href: 'https://www.twitch.tv/midudev',
        text: 'Twitch',
        file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba\\prueba.md'
      }],
    validateTrue :[
        {
          href: 'https://nodejs.org/api/path.html#pathextnamepath',
          text: 'nodeJS',
          file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba\\prueba.md',
          status: 200,
          message: 'ok'
        },
        {
          href: 'https://www.youtube.com/watch?v=o85OkeVtm7k',
          text: 'Curso nodeJS - midudev',
          file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba\\prueba.md',
          status: 200,
          message: 'ok'
        },
        {
          href: 'https://www.twitch.tv/midudev',
          text: 'Twitch',
          file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba\\prueba.md',
          status: 200,
          message: 'ok'
        }
      ],
      validateTrueLinkFalse:  [
        {
            href: 'https://nodejs.org/api/path.html#pathextnamepath',
            text: 'nodeJS',
            file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba2\\prueba.md',
            status: 200,
            message: 'ok'
        },
        {
            href: 'https://www.youtube.com/watch?v=o85OkeVtm7k',
            text: 'Curso nodeJS - midudev',
            file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba2\\prueba.md',
            status: 200,
            message: 'ok'
        },
        {
            href: 'https://khammylv.github.io/portafolio/',
            text: 'Twitch',
            file: 'D:\\proyectos Web\\laboratoria\\proyectMdLinks\\markdown-links\\prueba2\\prueba.md',
            status: 404,
            message: 'fail'
        }
    ],
    
    statsData: { Total: 3, Unique: 3 },
    statsAndValidateData: { Total: 3, Unique: 3, Broken: 0 }
    
}

module.exports = {
  mocksData
}