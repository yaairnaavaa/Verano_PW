
function potencia(base, exponente){
    let resultado=1;

    for(let i=1;i<=exponente;i++){
        resultado=resultado*base;

    }
    console.log(resultado);

}
//potencia(5,3);

function arreglo10MasAleatorios(){
    const a=[1,2,3,4,5,6,7,8,9,10];
    let mayor = 0;
    console.log(a)
   let sumaDiez=a.map(n=>n+((Math.random()*100)+1));
   console.log(sumaDiez)
    sumaDiez.forEach( 
function(n)
    {   if(mayor<n){
        mayor=n
                    }
    }
    )//for each
console.log("mayor= "+mayor)


}

//arreglo10MasAleatorios();

function pelicula(){
    const pelicula = {
        titulo:"El señor de los anillos",
        direcccion:"Peter jackson",
        añoDeLanzamiento: 2001,
        protagonista:"Frodo",
        recaudacionEnTaquilla:"868 385 360 USD"

    }
    console.log(pelicula);
    delete(pelicula.protagonista)
    console.log(pelicula);
    pelicula.productora="New line cinema"
    console.log(pelicula);
}
//pelicula();




function ventas(){
let ventas = [];
let seguir = true;

while (seguir) {
  let vendedor = prompt("Nombre del vendedor:");
  let producto = prompt("Nombre del producto:");
  let cantidad = parseInt(prompt("Cantidad vendida:"), 10);
  let precioUnitario = parseFloat(prompt("Precio unitario:"));

  ventas.push({
    vendedor,
    producto,
    cantidad,
    precioUnitario,
    total: cantidad * precioUnitario
  });

  seguir = confirm("¿Deseas registrar otra venta?");
}

// Total de ventas
console.log("Total de ventas realizadas: " + ventas.length);

// Total de ingresos
let totalIngresos = ventas.reduce((sum, venta) => sum + venta.total, 0);
console.log("Total de ingresos: $" + totalIngresos.toFixed(2));

// Unidades vendidas por producto
let productosVendidos = {};

ventas.forEach(venta => {
  if (!productosVendidos[venta.producto]) {
    productosVendidos[venta.producto] = 0;
  }
  productosVendidos[venta.producto] += venta.cantidad;
});

console.log("\nUnidades vendidas por producto:");
for (let producto in productosVendidos) {
  console.log(`- ${producto}: ${productosVendidos[producto]} unidades`);
}

// Vendedor con más ventas (en dinero)
let ventasPorVendedor = {};

ventas.forEach(venta => {
  if (!ventasPorVendedor[venta.vendedor]) {
    ventasPorVendedor[venta.vendedor] = 0;
  }
  ventasPorVendedor[venta.vendedor] += venta.total;
});

let maxVendedor = "";
let maxMonto = 0;

for (let vendedor in ventasPorVendedor) {
  if (ventasPorVendedor[vendedor] > maxMonto) {
    maxMonto = ventasPorVendedor[vendedor];
    maxVendedor = vendedor;
  }
}

console.log(`\nVendedor con más ventas: ${maxVendedor} ($${maxMonto})`);
}
ventas();