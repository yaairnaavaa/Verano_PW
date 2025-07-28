//ejercicio 1
function potencia(){
    let base = prompt("base: ");
    let exponente = prompt("exponente: ");
    let resultado=1;

    for(let i=1; i<= exponente; i++){
        resultado=resultado*base;
    }
    console.log(`${resultado}`);
    return resultado;
}
//potencia();

//ejercicio2
function numeroGrande(){
let numeros = [];
    
    for(let i = 0; i < 10; i++){
        let numero = Math.floor(Math.random() * 101);
        numeros.push(numero);
    }
    
    console.log(numeros);
    
    let mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    
    console.log("El numero mas grande es: "+mayor);
}
//numeroGrande();

//ejercicio 3
function objetoPelicula(){
    let pelicula = {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        anoLanzamiento: 1972,
        protagonista: "Marlon Brando",
        recaudacion: "$245,066,411"
    };
    console.log("Pelicula:");
    console.log(pelicula);
    
    delete pelicula.protagonista;
    console.log(pelicula);
    
    pelicula.productora = "Paramount Pictures";
    console.log(pelicula);
}
//objetoPelicula();