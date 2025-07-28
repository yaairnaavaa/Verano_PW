//Ejercicio 5

function Potencia(base, exponente) {
    if (exponente < 0) {
        return "El exponente debe ser un número positivo.";
    }
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return console.log(`La potencia de ${base} elevado a ${exponente} es: ${resultado}`);
}
Potencia(2, 3);

//Ejercicio 6
function ArregloNum() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    const mayor = Math.max(...numeros);
    console.log(`Los números generados son: ${numeros}`);
    console.log(`El mayor es: ${mayor}`);
}
ArregloNum();

//Ejercicio 7
function Pelicula() {
    let pelicula = {
        titulo: "Inception",
        director: "Christopher Nolan",
        año: 2010,
        protagonista: "Leonardo DiCaprio",
        recaudacion: 829895144,
    };
    console.log("Original", pelicula);

    delete pelicula.protagonista;
    console.log("Sin Protagonista",pelicula);

    pelicula.productora = "Warner Bros";
    console.log("Con productora", pelicula);


}
Pelicula();

//Ejercicio 8
function registroVentas(){
  let ventas = [];
  for (let i = 0; i < 6; i++) {     
}

}
