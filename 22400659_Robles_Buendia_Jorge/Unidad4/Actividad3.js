/*un programa que reciba dos parametros y que sea la base y el exponente y que regrese el resultado*/

function potencia(base, exponente){
    document.writeln("resultado "+Math.pow(base,exponente))
}
/*hacer un arreglo que 10 numeros generados aleatoriamente y regrese el numero mas grande*/

function arreglo(){
    let num=[], mayor=-5;
    for (let index = 0; index < a10; index++) {
        num[index]=(Math.floor(Math.random()*100))
        if(num[index]>mayor) mayor=num[index];
    }
    document.writeln("numero mayor "+mayor)
}
/*crear un objeto pelicula(titulo,director, anio,protagonista, recaudacion) borraar protagonista u agregar  productora*/


function objeto(){
    let Pelicula = {
        titulo:"no te metas con zohan",
        anio:2008,
        protagonista:"adam samler",
        recaudacion:127474635
    }

    console.log(Pelicula);
    delete Pelicula.protagonista
    console.log(Pelicula);
    Pelicula.productora="aaaaa"
    console.log (Pelicula)

    
}
/*hacer un programa de ventas que tenga el objeto ventas(nombreVendedor, producto, cantidad, precio unitario)
permitir multiples ventas */

let ventas = [];
let continuar = true;

while (continuar) {
  let vendedor = prompt("Nombre del vendedor:");
  let producto = prompt("Nombre del producto:");
  let cantidad = parseInt(prompt("Cantidad vendida:"));
  let precio = parseFloat(prompt("Precio unitario:"));

  ventas.push({ vendedor, producto, cantidad, precio });

  continuar = confirm("¿Registrar otra venta?");
}


let ingresosTotales = ventas.reduce((acc, venta) => acc + venta.cantidad * venta.precio, 0);

let productos = {};
ventas.forEach(({ producto, cantidad }) => {
  productos[producto] = (productos[producto] || 0) + cantidad;
});

let vendedores = {};
ventas.forEach(({ vendedor, cantidad, precio }) => {
  vendedores[vendedor] = (vendedores[vendedor] || 0) + cantidad * precio;
});

let mejorVendedor = Object.entries(vendedores).reduce((max, actual) => {
  return actual[1] > max[1] ? actual : max;
});





















//potencia(2,3);