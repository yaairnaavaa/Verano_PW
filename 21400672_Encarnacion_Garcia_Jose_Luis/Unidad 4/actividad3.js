function potencia() {
    let base = prompt("Ingrese la base:");
    let exponente = prompt("Ingrese el exponente:");
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log(resultado);
}

potencia();

function numMayor(){
    let arreglo = [];

    for (let i = 0; i < 10; i++) {
        arreglo.push(Math.floor(Math.random() * 101));
    }

    console.log("Arreglo:", arreglo);

    let mayor = Math.max(...arreglo);
    console.log("Número más grande:", mayor);
}

//numMayor();

function peli(){

let pelicula = {
    titulo: "Inception",
    director: "Christopher Nolan",
    año: 2010,
    protagonista: "Leonardo DiCaprio",
    recaudacion: 829895144
};

console.log("Película completa:", pelicula);

// Eliminar el atributo protagonista
delete pelicula.protagonista;

console.log("Después de eliminar 'protagonista':", pelicula);

// Agregar nueva propiedad
pelicula.productora = "Warner Bros.";

console.log("Después de agregar 'productora':", pelicula);
}

peli();