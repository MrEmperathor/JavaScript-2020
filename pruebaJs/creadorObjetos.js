function CreaPerro(nombre, edad, vivo) {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
};
var perro1 = new CreaPerro("rex", 2, true);
console.log(perro1);

var perro2 = new CreaPerro("Tomy", 4, false);
console.log(perro2);

var animales = [perro1, perro2];
console.log(animales);

// array
var gatos = [
    {
        nombre : "samuray",
        edad : "2 años"
    },
    {
        nombre : "Alejo",
        edad : "1 mes"
    }
];
console.log(gatos);