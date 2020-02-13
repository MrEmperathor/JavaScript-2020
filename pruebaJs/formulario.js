function accion() 
{
    function Constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
    };
    var nombePersona = document.getElementById("namee").value;
    var edadPersona = document.getElementById("edadd").value;

    persona1 = new Constructor(nombePersona, edadPersona);
    console.log(persona1);
    
    agregar();
}

baseDatos = [];

function agregar() 
{
    baseDatos.push(persona1);
    console.log(baseDatos);
    document.getElementById("tablaa").innerHTML += `<tr><th scope="row">${persona1.edad}</th><td>${persona1.nombre}</td></tr></<tr>`
}

