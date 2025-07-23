//Ejercicio 1
/*
function potencia(bae, exponente) {

    let r = 1;

    for (let i = 0; i < exponente; i++) {
        resultado *= base
    }

    return resultado
}

console.log(potencia(3, 4));

console.log("-------Ejercicio 2-------")
//Ejercicio 2

function Nmayor() {
    let num = []

    for (let j = 0; j < 10; j++) {
        let a = Math.floor(Math.random() * 100);
        num.push(a)
    }

    let m = num[0]

    for(let k = 1; k<num.length; k++){
        if(num[k] > m){
            m = num[i]
        }
    }
    return m
}

let mayor = Nmayor()
console.log("el numero mayor es: " + mayor)


console.log("-------Ejercicio 3-------")
//Ejercicio 3

let Pelicula = {
    titulo: "La llorona",
    director: "Gilmar Steven",
    ano: 2015,
    protagonista: "Bruce wayne",
    recaudacion: "1.7M"
}

console.log(Pelicula)

delete Pelicula.protagonista

console.log(Pelicula)

Pelicula.productora = "Fox"

console.log(Pelicula);

*/

console.log("-------Ejercicio 4-------")
//Ejercicio 4

function ventas() {
    let ventas = [];
    let totalVentas = 0;
    let totalIngresos = 0;
    let productosVendidos = {};
    let vendedorMayorVenta = { nombre: "", monto: 0 };

    while (true) {
        let nombreVendedor = prompt("Vendedor:");
        let nombreProducto = prompt("Producto:");
        let cantidadVendida = parseInt(prompt("Cantidad:"));
        let precioUnitario = parseFloat(prompt("Precio:"));

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
    console.log("Total de ventas:", totalVentas);
    console.log("Total de ingresos:", totalIngresos);
    console.log("Unidades vendidas:", productosVendidos);
    console.log("Vendedor con mayor ventas:", vendedorMayorVenta.nombre,
        "total de", vendedorMayorVenta.monto);
}

// Llamada a las funciones
potencia(8, 5);
//numeroMayor();
//pelicula();
//ventas();
