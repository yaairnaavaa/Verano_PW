/*1. Elabora un programa que contenga la función llamada
potencia y reciba dos parámetros; base y exponente. La 
función deberá retornar la potencia de acuerdo con los
parámetros recibidos. El cálculo de la potencia se 
realizará por medio de un ciclo for*/
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log(`La potencia de ${base} elevado a ${exponente} es: ${resultado}`);
    return resultado;
}

/*2. Elabora un programa que añada a un arreglo 10 números
aleatorios del 0 al 100 y retornará el número más grande 
del arreglo*/
function numeroMayor() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 101));
    }
    console.log("Números generados:", numeros);
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    console.log("Número mayor:", mayor);
}

/*3.Crea un programa que contenga un objeto que almacene los
datos de una película: Título,director, año de lanzamiento,
protagonista y recaudación en taquilla. Después, mostrar en
consola el contenido del objeto. Luego, por medio del operador 
delete, elimina el atributo "protagonista" y vuelve a mostrar 
el contenido del objeto. Finalmente, agrega el atributo 
"productora" usando la notación de punto*/

function pelicula() {
    let pelicula = {
        titulo: "Senna",
        director: "Asif Kapadia",
        año: 2011,
        protagonista: "Ayrton Senna",
        recaudacion: 10000000
    };
    console.log("Película:", pelicula);

    delete pelicula.protagonista;
    console.log("Datos Película", pelicula);

    pelicula.productora = "Universal Pictures";
    console.log(pelicula);
}

/*4.Crea un programa en JavaScript que simule el registro de
ventas de una tienda. Cada venta debe contener el nombre del 
vendedor, nombre del producto, la cantidad vendida y el precio
unitario. El programa debe permitir registrar múltiples ventas
(solicitándolas mediante promp()) y al finalizar debe mostrar en 
consola el total de ventas realizadas, el total de ingresos 
generados, cuántas unidades se vendieron de cada producto y cuál
fue el vendedor que generó el mayor monto en ventas. El ejercicio
debe aplicar ciclos,arreglos,objetos,condicionales y usar como 
.push() .map() .forEach() o reduce()*/

function ventas() {
    let ventas = [];
    let totalVentas = 0;
    let totalIngresos = 0;
    let productosVendidos = {};
    let vendedorMayorVenta = { nombre: "", monto: 0 };

    while (true) {
        let nombreVendedor = prompt("Ingrese el nombre del vendedor:");
        let nombreProducto = prompt("Ingrese el nombre del producto:");
        let cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida:"));
        let precioUnitario = parseFloat(prompt("Ingrese el precio unitario:"));

        if (!nombreVendedor || !nombreProducto || isNaN(cantidadVendida) || isNaN(precioUnitario)) {
            break;
        }

        let venta = {
            vendedor: nombreVendedor,
            producto: nombreProducto,
            cantidad: cantidadVendida,
            precio: precioUnitario
        };

        ventas.push(venta);
        totalVentas += cantidadVendida;
        totalIngresos += cantidadVendida * precioUnitario;

        // Actualizar productos vendidos
        if (!productosVendidos[nombreProducto]) {
            productosVendidos[nombreProducto] = 0;
        }
        productosVendidos[nombreProducto] += cantidadVendida;

        // Verificar vendedor con mayor monto en ventas
        let montoVenta = cantidadVendida * precioUnitario;
        if (montoVenta > vendedorMayorVenta.monto) {
            vendedorMayorVenta.nombre = nombreVendedor;
            vendedorMayorVenta.monto = montoVenta;
        }
    }
    console.log("Total de ventas realizadas:", totalVentas);
    console.log("Total de ingresos generados:", totalIngresos);
    console.log("Unidades vendidas por producto:", productosVendidos);
    console.log("Vendedor con mayor monto en ventas:", vendedorMayorVenta.nombre,
        "con un total de", vendedorMayorVenta.monto);
}

// Llamada a las funciones
potencia(8, 5);
//numeroMayor();
//pelicula();
//ventas();