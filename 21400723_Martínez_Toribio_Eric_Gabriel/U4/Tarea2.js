// Ejercico 1
var calcularPotencia = function() {
    var base = prompt("Introduce un número");
    var exponente = prompt("Introduce la potencia de ese número");
    var resultado = 1;
    for (var i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log(resultado);
}

// Ejercicio 2
var encontrarNumMayor = function() {
    var listaNumeros = [];
    var numeroMayor = 0;

    for (var i = 0; i < 10; i++) {
        var num = Math.floor(Math.random() * 101);
        console.log(num);
        if (num > numeroMayor) {
            numeroMayor = num;
        }
        listaNumeros[i] = num;
    }
    console.log("El número mayor es: " + numeroMayor);
}

// Ejercico 3
var infoPelicula = function() {
    var film = {
        titulo: "Interestelar",
        director: "Christofer Nolan",
        lanzamiento: "19 marzo 2014",
        protagonista: "Matthew McConaughey",
        recaudacion: 100000,
    };
    console.log("Película:", film);
    delete film.protagonista;
    console.log("Película sin protagonista:", film);

    film.productora = "Paramount Pictures";
    console.log("Película con productora:", film);
}

/*4*/
var gestionarTienda = function() {
    var registrosVentas = [];
    var nombreVendedor = "";
    var ingresosTotales = 0;
    var productosTotalesVendidos = {};
    var ventasPorVendedor = {};

    do {
        nombreVendedor = prompt("Nombre del vendedor:");
        var nombreProducto = prompt("Nombre del producto:");
        var cantidadVendida = parseInt(prompt("Cantidad vendida:"));
        var precioUnitario = parseFloat(prompt("Precio unitario:"));

        if (nombreVendedor !== "") {
            registrosVentas.push({
                vendedor: nombreVendedor,
                producto: nombreProducto,
                cantidad: cantidadVendida,
                precio: precioUnitario,
                total: cantidadVendida * precioUnitario
            });
        }

        if (cantidadVendida > 0 && precioUnitario > 0) {
            ingresosTotales += cantidadVendida * precioUnitario;
        }

    } while (nombreVendedor !== "");

    registrosVentas.forEach(function(venta) {
        if (!productosTotalesVendidos[venta.producto]) {
            productosTotalesVendidos[venta.producto] = 0;
        }
        productosTotalesVendidos[venta.producto] += venta.cantidad;

        if (!ventasPorVendedor[venta.vendedor]) {
            ventasPorVendedor[venta.vendedor] = 0;
        }
        ventasPorVendedor[venta.vendedor] += venta.total;
    });

    var mejorVendedor = "";
    var mayorVenta = 0;

    for (var vendedor in ventasPorVendedor) {
        if (ventasPorVendedor[vendedor] > mayorVenta) {
            mayorVenta = ventasPorVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Número total de ventas:", registrosVentas.length);
    console.log("Ingresos totales: $" + ingresosTotales.toFixed(2));
    console.log("Unidades vendidas por producto:");
    for (var producto in productosTotalesVendidos) {
        console.log("- " + producto + ": " + productosTotalesVendidos[producto] + " unidades");
    }
    console.log("Vendedor con mayores ventas: " + mejorVendedor + " ($" + mayorVenta.toFixed(2) + ")");
}


//calcularPotencia();
//encontrarNumMayor();
//infoPelicula();
gestionarTienda();
