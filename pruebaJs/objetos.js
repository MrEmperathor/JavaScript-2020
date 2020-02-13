var user = "Alejo";
var persona = {
    nombre : "Alejo",
    sexo : "Masculino"
};

var miObjeto = {
    // clave : valor
    nombre : "Alberth",
    edad : "2020",
    importante : true,
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date(),
    raya : "-----"
};

var {nombre} = miObjeto; // Desestructuracion de un objeto

console.log(nombre);

var otraFuncion1 = ({texto},) => texto;
console.log(otraFuncion1(miObjeto));

var otraFuncion1 = ({importante},{otroObjeto},{raya}) => {
    console.log(raya);
    console.log(otroObjeto.sexo);
    console.log(importante);
};

otraFuncion1(miObjeto,miObjeto,miObjeto);

// var otraFuncion = (text,{otroObjeto}) => {
//     console.log(otroObjeto.sexo);
//     console.log(text);
// };
// console.log(otraFuncion(texto,{miObjeto}));