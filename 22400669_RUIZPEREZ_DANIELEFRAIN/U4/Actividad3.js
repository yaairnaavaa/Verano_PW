/*
Elabora un programa que contenga una funcion llamada
potencia y reciba dos parámetros; base y exponente. La
función deberá retornar la potencia de acuerdo con los 
parámetros recibidos. El calculo de la potencia se 
realizará por medio de un ciclo for.
*/
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}

const base = 2;
const exponente = 5;
//const resultado = potencia(base, exponente);
//console.log(resultado);

/*
2.- Elabora un programa que añada a un arreglo 10 números
aleatorios del 0 al 100 y retornará el número más grande 
del arreglo
*/
function generarYEncontrarMasGrande() {

    const arregloDeNumeros = [];
    for (let i = 0; i < 10; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 101);
        arregloDeNumeros.push(numeroAleatorio);
    }

    console.log("Arreglo generado:", arregloDeNumeros);

    let numeroMasGrande = arregloDeNumeros[0];

    for (let i = 1; i < arregloDeNumeros.length; i++) {

        if (arregloDeNumeros[i] > numeroMasGrande) {
            numeroMasGrande = arregloDeNumeros[i];
        }
    }

    return {
        arreglo: arregloDeNumeros,
        mayor: numeroMasGrande
    };
}

const resultado = generarYEncontrarMasGrande();
console.log(`\nEl número más grande del arreglo es: ${resultado.mayor}`);

/*
3.- Crea un programa que contenga un objeto que almacene los datos
de una película: Título, director, año de lanzamiento, protagonista 
y recaudación en taquilla. Después, mostrar en consola el contenido
del objeto. Luego, por medio del operador delete, elimina el atributo
"protagonista" y vuelve a mostrar el contenido del objeto. Finalmente
agrega el atributo "productora" usando la notación de punto.
*/
function película() {
    const pelicula = {
        titulo: "Interestelar",
        director: "Christopher Nolan",
        lanzamiento: 2014,
        protagonista: "Matthew McConaughey",
        recaudacionTaquilla: "677.5 millones USD"
    };


    console.log("--- Objeto Original ---");
    console.log(pelicula);

    delete pelicula.protagonista;

    console.log("\n--- Objeto sin el atributo 'protagonista' ---");
    console.log(pelicula);

    pelicula.productora = "Warner Bros. Pictures";


    console.log("\n--- Objeto con el nuevo atributo 'productora' ---");
    console.log(pelicula);

}

//película();
/*
4.- Crea un programa en JS que simule el registro de ventas de una tienda
Cada venta debe contener el nombre del vendedor, el nombre del producto, 
la cantidad vendida y el precio unitario. El programa debe permitir registrar
múltiples ventas (solicitandolos mediante prompt()) y al finalizar debe
mostrar en consola el total de ventas realizadas, el total de ingresos generados
cuantas unidades se vendieron de cada producto y cual fue el vendedor que genero
el mayor monto en ventas. El ejercicio debe usar ciclos, arreglos, objetos,
condicionales y usar métodos como .push(), .map(), .forEach()
o .reduce()
*/
function iniciarRegistroDeVentas() {
    const ventas = [];
    let continuarRegistro = true;

    console.log("--- Iniciando Registro de Ventas ---");

    while (continuarRegistro) {
        const vendedor = prompt("Nombre del vendedor:");
        if (vendedor === null) break;

        const producto = prompt("Nombre del producto:");
        if (producto === null) break;

        let cantidad = parseInt(prompt("Cantidad vendida:"));
        while (isNaN(cantidad) || cantidad <= 0) {
            alert("Error: Por favor, ingrese una cantidad numérica y mayor a cero.");
            const nuevaCantidad = prompt("Cantidad vendida:");
            if (nuevaCantidad === null) {
                cantidad = null;
                break;
            }
            cantidad = parseInt(nuevaCantidad);
        }
        if (cantidad === null) break;

        let precioUnitario = parseFloat(prompt("Precio unitario:"));
        while (isNaN(precioUnitario) || precioUnitario <= 0) {
            alert("Error: Por favor, ingrese un precio mayor a cero.");
            const nuevoPrecio = prompt("Precio unitario:");
            if (nuevoPrecio === null) {
                precioUnitario = null;
                break;
            }
            precioUnitario = parseFloat(nuevoPrecio);
        }
        if (precioUnitario === null) break;

        const venta = {
            vendedor: vendedor.trim(),
            producto: producto.trim().toLowerCase(),
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            totalVenta: cantidad * precioUnitario,
        };

        ventas.push(venta);
        console.log(`Venta registrada: ${cantidad} de ${producto} por ${vendedor}.`);

        continuarRegistro = confirm("¿Desea registrar otra venta?");
    }

    if (ventas.length > 0) {
        //console.clear();
        console.log(" --- RESUMEN FINAL DE VENTAS --- ✅");

        const totalVentas = ventas.length;
        console.log(`\n1. Total de ventas realizadas: ${totalVentas}`);

        const totalIngresos = ventas.reduce((acumulador, venta) => acumulador + venta.totalVenta, 0);
        console.log(`2. Total de ingresos generados: $${totalIngresos.toFixed(2)}`);

        const unidadesPorProducto = {};
        ventas.forEach(venta => {
            if (unidadesPorProducto[venta.producto]) {
                unidadesPorProducto[venta.producto] += venta.cantidad;
            } else {
                unidadesPorProducto[venta.producto] = venta.cantidad;
            }
        });
        console.log("\n3. Unidades vendidas por producto:");
        console.table(unidadesPorProducto);

        const ventasPorVendedor = {};
        ventas.forEach(venta => {
            if (ventasPorVendedor[venta.vendedor]) {
                ventasPorVendedor[venta.vendedor] += venta.totalVenta;
            } else {
                ventasPorVendedor[venta.vendedor] = venta.totalVenta;
            }
        });

        let mejorVendedor = { nombre: 'N/A', monto: 0 };
        for (const vendedor in ventasPorVendedor) {
            if (ventasPorVendedor[vendedor] > mejorVendedor.monto) {
                mejorVendedor = {
                    nombre: vendedor,
                    monto: ventasPorVendedor[vendedor]
                };
            }
        }
        console.log("\n4. Vendedor con mayores ingresos:");
        console.log(`🏆 ${mejorVendedor.nombre} con un total de $${mejorVendedor.monto.toFixed(2)} en ventas.`);

        console.log("\n--- Detalle completo de todas las ventas ---");
        console.table(ventas);

    } else {
        console.log("\nNo se registró ninguna venta. El programa ha finalizado.");
    }
}

iniciarRegistroDeVentas();
