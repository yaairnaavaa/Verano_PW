/*
Ejercicio 1.

Elabora un programa que contenga una función llamada potencia y reciba
dos parámetros; base y exponente. La función deberá retornar la
potencia de acuerdo con los parámetros recibidos. El cálculo de la
potencia se realizará por medio de un ciclo for.
*/

function potencia(base, exponente) {  
    let num = 1;
    
    for(let i=0; i<exponente; i++) {
        num *= base;
    }

    return console.log("Potencia: " + num);
}
/*
console.log("Ejercicio 1");
let num1 = prompt("Ingrese el Número 1: "); 
let num2 = prompt("Ingrese el Número 2: "); 
potencia(num1, num2);*/

/* 
Ejercicio 2.

Elabora un programa que añada a un arreglo 10 números aleatorios 
del 0 al 100 y retornará el número más grande del arreglo.
*/

function ejercicio2() {
    let numeros = [];

    for(let i=0; i<10; i++) {
        numeros[i] = Math.round(Math.random() * 100);
    }
    console.log(numeros);
    return numeros.reduce(((mayor, n) => n > mayor ? n : mayor), 0);
}

console.log("");
console.log("Ejercicio 2");
console.log(ejercicio2())

/* 
Ejercicio 3.

Crea un programa que contenga un objeto que almacene los datos de una
película: Titulo, director, año de lanzamiento, protagonista y
recaudación en taquilla. Después, mostrar en consola el contenido del
objeto. Luego, por medio del operador delete, elimina el atributo 
"protagonista" y vuelve a mostrar el contenido del objeto.
Finalmente, agrega el atributo "productora" usando la notacion de punto.
*/

function ejercicio3() {
    let pelicula = {
        titulo: "SpiderMan 1",
        director: "Sam Raimi",
        año: 2002,
        protagonista: "Tobey Maguire",
        taquilla: 75000000
    }

    console.log(pelicula);

    delete pelicula.protagonista;
    console.log(pelicula);

    pelicula.productora = "Sony";
    console.log(pelicula);
}

console.log("");
console.log("Ejercicio 3");
ejercicio3();

/*
Ejercicio 4.

Crea un programa en JavaScript que simule el registro de ventas de una tienda.
Cada venta debe contener el nombre del vendedor, el nombre del producto, la
cantidad vendida y el precio unitario. El programa debe permitir registrar
múltiples ventas (solicitándolos mediante prompt() y al finalizar debe mostrar
en consola el total de ventas realizadas, el total de ingresos generados,
cuántas unidades se vendieron de cada producto y cuál fue el vendedor que
generó el mayor monto en ventas. El ejercicio debe aplicar ciclos, arreglos,
objetos, condicionales y usar métodos como .push(), map(), .forEach() o reduce())
*/

function ejercicio4() {
    let op, venta;
    let ventas = [];
    
    do {
        op = prompt("¿Quieres realizar una venta? s/n").toLocaleLowerCase();

        if(op == "s" || op == "si") {
            venta = {
                vendedor: prompt("Nombre de Vendedor: "),
                producto: prompt("Nombre de Producto: "),
                cantidad: parseInt(prompt("Cantidad Vendida: ")),
                precio: parseFloat(prompt("Precio Unitario: "))
            };

            ventas.push(venta);
            console.log(venta);
        }
    } while(op !== "n" && op !== "no");

    //Total de Ingresos Generados
    const totalIngresos = ventas.reduce((totalIngresos, n) => 
        totalIngresos + (n.cantidad * n.precio), 0
    );

    //Cantidad de Unidades por Productos
    const cantProductos = {};

    ventas.forEach(venta => {
        if(cantProductos[venta.producto]) {
            cantProductos[venta.producto] += venta.cantidad;
        } else {
           cantProductos[venta.producto] = venta.cantidad; 
        }
    });

    //Vendedor con Mayor Monto en Ventas


    console.log("Total de Ventas realizadas: " + ventas.length);
    console.log("Total de ingresos generados: " + totalIngresos);
    console.log("\nUnidades vendidas por producto:");
    for (const prod in cantProductos) {
    console.log(`- ${prod}: ${cantProductos[prod]} unidades`);
    }
    console.log("Vendedor con mayor monto en ventas: ");
}

console.log("");
console.log("Ejercicio 4");
ejercicio4();
