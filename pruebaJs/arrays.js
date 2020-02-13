var permitido = "Usuario Permitido";
var miFuncion = acceso => acceso;
var persona = {
    nombre : "Pepe",
    miAutomivil : [
        pintura = {
            marca : "Ford",
            precio : 50000,
            color : "Verde"
        },
        vendedor = {
            nombre : "Juanito",
            edad : 20,
            ayudantes : {
                ayun1 : "carlos",
                ayun2 : "jose"
            }
        }
    ]
}
var miArray = ["alberh",2020,323.323,true,["otro array", "element two array"], miFuncion(permitido),persona];
console.log(miArray[6].miAutomivil[0].marca);