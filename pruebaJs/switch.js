var opcion = "Nuevo menu";

switch (opcion) {
    case 1:
        console.log("Nuevo menu");
        break;
    case 2:
        console.log("Segundo menu");
        break
    case 3:
        console.log("configuracion");
        break
    case "Nuevo menu":
        let miNuevomenu = "Alberth";
        var miObjeto = {
            nombre : miNuevomenu,
            apodo : "Emperador"
        }
        console.log(miObjeto.nombre);
        break
    default:
        break;
}