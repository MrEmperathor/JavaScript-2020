var gente1 = {
    nombre : "Alberth",
    edad : 24,
    apodo : "Emperador"
};
var gente2 = {
    nombre : "Jesus",
    edad : 28,
    apodo : "cocla"
}
var gente3 = {
    nombre : "Alejo",
    edad : 5,
    apodo : "terminator"
}

var personas = [gente1, gente2, gente3];

personas.forEach( (element,i) => {
    console.log(i)
    console.log(element.nombre + " " + i)
})

// for (let index = 0; index < personas.length; index++) {
//     const element = personas[index].nombre;
//     if (element == "Alberth") {
//         console.log(`${element} es el mayor`);
//         continue;
//     }
//     console.log(element);
// }


// for( i=1; i <= 10; i++ ){
//     if (i==1) {
//         console.log(`Hola ${i} vez`);
//     }else{
//         console.log(`Hola ${i} veces`);
//     }
// }