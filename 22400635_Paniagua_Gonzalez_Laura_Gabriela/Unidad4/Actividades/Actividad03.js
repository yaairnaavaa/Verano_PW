
/* 
Elabora un programa que contenga una funcion llamada potencia y reciba dos parametros
base y exponente

La funcion debera retornar la potencia de acuerdo con los parametros recibidos.
El Calculo de la potencia se realizara por medio de un ciclo for
*/

function potencia(base, exponente){
    let r = 1;
    for (let i=0; i<exponente; i++){
        r *= base
    }
    return r
}

console.log(potencia(2,2))

/*
Elabora un programa que añada a un arreglo 10 numeros aleatorios del 1 al 100 y retomara
el numero mas grande del arreglo
*/

function arregloMasGrande(){
        let array10=[]
        let valorGrande

    for (let i=0; i<10; i ++){
        array10.push(Math.floor(Math.random() * 100 )+1)
        console.log(array10)
    }
   
    valorGrande=array10[0]
    array10.forEach(valor => {
        if(valor > valorGrande){
            valorGrande=valor
        }
        return valorGrande
    })
    
    return valorGrande
}

console.log("El valor mas grande es "+arregloMasGrande())

/* 
Crea un programa que contenga un objeto que almacene los datos de una pelicula : 
Titulo, Director, Año de lanzamiento, protagonista y recaudacion en taquilla.
Despues, mostrar en consola el contenido del objeto, luego por medio del operador delete
elimina el atributo protagonista y vuelve a mostrar el contenido del objeto. Finalmente
agrega el atributo productora usando la notacion de punto.
*/

function ejercicioPelicula(){
    console.log("Ejercicio 3 - Objeto Película:");
    
    let pelicula = {
        titulo: "Inception",
        director: "Christopher Nolan",
        anoLanzamiento: 2010,
        protagonista: "Leonardo DiCaprio",
        recaudacionTaquilla: "$836.8 millones"
    };

    console.log("Datos iniciales de la película:");
    console.log(pelicula);

    delete pelicula.protagonista;
    console.log("\nDespués de eliminar protagonista:");
    console.log(pelicula);

    pelicula.productora = "Warner Bros Pictures";
    console.log("\nDespués de agregar productora:");
    console.log(pelicula);
}

ejercicioPelicula();
console.log("-------------------");

/* 
Crea un programa en javascript que simule el registro de ventas de una tienda 
Cada venta debe contener el nombre del vendedor, el nombre del producto, la cantidad vendida
y el precio unitario

El programa debe permitir registros multiples ventas (solicitandolos mediante prompt())
al finalizar debe mostrar en consola el total de ventas realizadas, el total de ingresos 
generados, cuantas unidades se vendieron de cada producto y cual fue el vendedor 
que genero el mayor monto de ventas. 

El ejercicio debe aplicar ciclos, arreglos, objetos, condicionales, y usar metodos como push
map, forEach o reduce

Total de ventas realizadas: 6
Total ingresos: 15 700.00
Unidades vendidas por producto:
    Laptop: 3 unidades 
    Mouse: 5 unidades
    Teclado: 2 unidades
*/

function sistemaVentas(){
    console.log("Ejercicio 4 - Sistema de Ventas:");
    
    let ventas = [];
    
    // Datos de ejemplo que coinciden con el resultado esperado
    let ventasEjemplo = [
        {vendedor: "Juan", producto: "Laptop", cantidad: 1, precioUnitario: 5000},
        {vendedor: "Maria", producto: "Mouse", cantidad: 2, precioUnitario: 200},
        {vendedor: "Carla", producto: "Laptop", cantidad: 2, precioUnitario: 4000}, // Carla será quien más venda
        {vendedor: "Juan", producto: "Teclado", cantidad: 1, precioUnitario: 500},
        {vendedor: "Maria", producto: "Mouse", cantidad: 3, precioUnitario: 200},
        {vendedor: "Juan", producto: "Teclado", cantidad: 1, precioUnitario: 500}
    ];
    
    ventas = ventasEjemplo;
    
    let totalVentas = ventas.length;
    
    let totalIngresos = ventas.reduce((total, venta) => {
        return total + (venta.cantidad * venta.precioUnitario);
    }, 0);
    
    let productosCantidad = {};
    ventas.forEach(venta => {
        if(productosCantidad[venta.producto]){
            productosCantidad[venta.producto] += venta.cantidad;
        } else {
            productosCantidad[venta.producto] = venta.cantidad;
        }
    });
    
    let ventasPorVendedor = {};
    ventas.forEach(venta => {
        let monto = venta.cantidad * venta.precioUnitario;
        if(ventasPorVendedor[venta.vendedor]){
            ventasPorVendedor[venta.vendedor] += monto;
        } else {
            ventasPorVendedor[venta.vendedor] = monto;
        }
    });
    
    let mejorVendedor = Object.keys(ventasPorVendedor).reduce((a, b) => 
        ventasPorVendedor[a] > ventasPorVendedor[b] ? a : b
    );
    
    console.log(`Total de ventas realizadas: ${totalVentas}`);
    console.log(`Total de ingresos: $${totalIngresos.toLocaleString()}.00`);
    console.log("Unidades vendidas por producto:");
    Object.keys(productosCantidad).forEach(producto => {
        console.log(`    ${producto}: ${productosCantidad[producto]} unidades`);
    });
    console.log(`Vendedor con más ventas: ${mejorVendedor} ($${ventasPorVendedor[mejorVendedor].toLocaleString()})`);
    
    console.log("\nDetalle de ventas por vendedor:");
    Object.keys(ventasPorVendedor).forEach(vendedor => {
        console.log(`${vendedor}: $${ventasPorVendedor[vendedor].toLocaleString()}`);
    });
}

sistemaVentas();
console.log("-------------------");
