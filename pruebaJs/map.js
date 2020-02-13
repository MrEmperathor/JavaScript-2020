pelicula1 = { titulo : "La monja", anio : 2018, valoracion : 4 };
pelicula2 = { titulo : "Anabelle", anio : 2014, valoracion : 3 };
pelicula3 = { titulo : "Anabelle 2", anio : 2017, valoracion : 5 };
pelicula4 = { titulo : "El conjuro", anio : 2013, valoracion : 5 };
pelicula5 = { titulo : "El conjuro 2", anio : 2016, valoracion : 3 };

peliculas = [pelicula1,pelicula2,pelicula3,pelicula4,pelicula5];

let miNuevoObjeto = ({valoracion}) => {
    valoracion >= 5 ? valoracion += 1 : valoracion += 0;
    let objeto = {};
    objeto["valoracion"] = valoracion;
    return objeto;
}
let miNuevaValoracion = peliculas.map(miNuevoObjeto);
console.log(miNuevaValoracion);
console.log(peliculas);


let reducirValoracion  = (acum, {valoracion}) => acum + valoracion;
let miTotalValoracion = peliculas.reduce(reducirValoracion,0);
console.log(miTotalValoracion);


let sumarValoracion = ({valoracion}) => valoracion >= 5 ? valoracion += 1 : valoracion += 0;
let valorado = peliculas.map(sumarValoracion);
console.log(valorado);