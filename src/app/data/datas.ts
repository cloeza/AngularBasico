import { Genre } from '../models/genre';
import { Album } from '../models/album';
import { Song } from '../models/song';
//Para ordenar mi codigo 
//Utilizo ctrl + k + f
export const albums: Album[] = [
    {
        img: 'assets/img/the_very_best_of_frank_sinatra.jpg',
        id: 8,
        name: "The Very Best of Frank Sinatra",
        description: "Es un álbum recopilatorio de doble disco de Frank Sinatra que consta de 40 éxitos que hizo de Reprise Records.",
        genre: Genre.Jazz,
        release: new Date('1997-06-10'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 100.10
    }
    
    
    , {
        img: 'assets/img/ejercito_de_paz.jpg',
        id: 9,
        name: "Ejercito de paz",
        description: "Es el sexto álbum de estudio de la banda mexicana de ska y rock en español Panteón Rococó y fue publicado por el sello discográfico La Real Independencia",
        genre: Genre.Rock,
        release: new Date('2010-03-23'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 188.10120
    }, {
        img: 'assets/img/ven_conmigo.jpg',
        id: 10,
        name: "Ven conmigo",
        description: "Segundo álbum de la cantante tejana Selena, por  EMI Latin.",
        genre: Genre.Salsa,
        release: new Date('1990-10-06'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 99.9999999
    }, {
        img: 'assets/img/aries.jpg',
        id: 11,
        name: "Aries",
        description: "Noveno álbum de estudio del cantante mexicano Luis Miguel que fue lanzado por WEA",
        genre: Genre.Rock,
        release: new Date('1993-06-22'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 80.10
    }, {
        img: 'assets/img/voy_a_pasarmelo_bien.jpg',
        id: 12,
        name: "Voy a pasarmelo bien",
        description: "Quinto álbum de estudio de la banda española de rock Hombres G.",
        genre: Genre.Opera,
        release: new Date('1989'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 100.10
    }, {
        img: 'assets/img/supernatural.jpg',
        id: 13,
        name: "Supernatural",
        description: "Decimoctavo álbum de estudio de la banda estadounidense Santana",
        genre: Genre.Rock,
        release: new Date('1999-06-15'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 100.788710
    }, {
        img: 'assets/img/cuenta_conmigo.jpg',
        id: 14,
        name: "Cuenta conmigo",
        description: "Tercer y más exitoso álbum de Jerry Rivera. Es considerado como uno de los álbumes más importantes de su carrera. Está posicionado como uno de los más vendidos de la historia de la salsa",
        genre: Genre.Salsa,
        release: new Date('1992-05-26'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 1770.10
    }, {
        img: 'assets/img/the_resistance.jpg',
        id: 15,
        name: "The resistance",
        description: "Quinto álbum de estudio de la banda británica Muse, publicado en Europa ",
        genre: Genre.Rock,
        release: new Date('2009-09-11'),
        songs: <Song[]>[
            {
                id:1,
            name: 'pista',
            lenght: '30:30'
        },
        {
            id:2,
            name: 'pista',
            lenght: '30:30'
        }
            , {
                id:3,
            name: 'pista',
            lenght: '30:30'
        }],
        price: 100.10
    }

]