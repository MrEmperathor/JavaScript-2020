pelicula1 = { titulo : "La monja", anio : 2018 };
pelicula2 = { titulo : "Anabelle", anio : 2014 };
pelicula3 = { titulo : "Anabelle 2", anio : 2017 };
pelicula4 = { titulo : "El conjuro", anio : 2013 };
pelicula5 = { titulo : "El conjuro 2", anio : 2016 };

peliculas = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5];

// let filtrarAnio = misPeliculas => misPeliculas.anio >= 2016 
let filtrarAnio = misPeliculas => misPeliculas.anio >= 2016 &&  misPeliculas.anio <= 2017

let filtrado = peliculas.filter(filtrarAnio);
console.log(filtrado);