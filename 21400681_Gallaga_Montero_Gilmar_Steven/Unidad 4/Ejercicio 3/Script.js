
//Actividad 1
function potencia(base, exponente){
    let Numero = 1;
    for(let i = 0; i < exponente; i++){
        Numero = Numero * base;
    }
    return Numero;
}
console.log(potencia(2,5));


//Actividad 2
function ArregloNumeros(){
    let Arreglo = [];
    for(let i = 0; i < 10; i++){
        Arreglo.push(Math.floor(Math.random() * 101));
    } 

    console.log("Arreglo: " + Arreglo);

    let mayor = Math.max(...Arreglo);
    console.log("Numero Mayor: ", mayor);
}
ArregloNumeros();


//Actividad 3
function Peliculas(){
    let DatosPeliculas = {
        titulo: "Superman Legacy",
        director: "James Gun",
        año: 2025,
        protagnista: "Superman",
        recaudacion: 250000.00
    }
    console.log("Datos de la pelicula: ",DatosPeliculas);
    

    delete DatosPeliculas.protagnista;
    console.log("Datos de la pelicula: ", DatosPeliculas);

    DatosPeliculas.Productora = "DC Studios";
    console.log("Datos de la pelicula: ", DatosPeliculas);
}
Peliculas();


//Actividad 4
function RegistrosVenta(){
    let Ventas = [];

    
}