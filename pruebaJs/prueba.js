var nombre = "Alberth";
var edad = 24;

console.log(`Mi nombre es: ${nombre} y tengo ${edad} años`);

var edad = 19
var res = edad >= 18 ? "Es mayor de edad" : "es menor de edad";

var miSuma = function (a,b) {
    return a + b;
};
console.log(miSuma(2,5));

var acceso = true;

// var accesoU = function(a) {
//     return a;
// };

// var accesoU = a => a;

// var accesoU = () => false;

// var accesoU = (a,n) => `Usuario ${n} Con Acceso ${a}`;
// accesoU(acceso,"Jesus");

var accesoU = (a,n) => {
    console.log(`Usuario ${n} en ejecucion`);
    return a;
};
console.log(accesoU(acceso,"Jesus"));
