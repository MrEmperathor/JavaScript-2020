var edad = 331;

var con = s => console.log(s);
if( edad >= 18 && edad <= 30 ){
    console.log("Es un joven Adolecente");
}else if( edad < 18 ){
    console.log("joven adulto");
}else if( edad > 30 && edad <= 55 ){
    con("Adulto");
}else if( edad > 55 ){
    con("anciano");
}else{
    con("indefinido");
}