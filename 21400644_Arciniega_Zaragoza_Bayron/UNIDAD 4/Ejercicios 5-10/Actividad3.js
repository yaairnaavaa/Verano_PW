//#1
function potencia(base, expo) {
    if (expo < 0) {
        return "El exponente debe ser positivo";
    }

    let total = 1;
    for (let i = 0; i < expo; i++) {
        total = total * base;
    }

    console.log("Resultado:", total);
}

potencia(4, 3);

//#2
function numerosAleatorios() {
    let lista = [];

    for (let i = 0; i < 10; i++) {
        lista.push(Math.floor(Math.random() * 101));
    }

    let max = Math.max(...lista);

    console.log("Números:", lista);
    console.log("Mayor:", max);
}
numerosAleatorios();


//#3
function pelicula() {
    let cartelera = {
        Titulo: "El Señor de los Anillos",
        director: "Peter Jackson",
        año: 2001,
        protagonista: "Elijah Wood",
        recaudiacion: 871000000,
    };
    console.log("Original",cartelera);
    delete cartelera.protagonista;
    console.log("sin protagonista",cartelera);
    cartelera.productora = "New Line Cinema";
    console.log("con productora",cartelera);
}

//#4
function ventasTienda() {
    let ventas = [];

    for (let i = 0; i < 6; i++) {
        let vendedor = prompt("Nombre del vendedor:");
        let producto = prompt("Producto vendido:");
        let cantidad = parseInt(prompt("Cantidad vendida:"));
        let precio = parseFloat(prompt("Precio unitario:"));

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio,
            total: cantidad * precio
        });
    }

    let totalIngresos = 0;
    let productosVendidos = {};
    let vendedores = {};

    ventas.forEach(v => {
        totalIngresos += v.total;

        if (!productosVendidos[v.producto]) {
            productosVendidos[v.producto] = 0;
        }
        productosVendidos[v.producto] += v.cantidad;

        if (!vendedores[v.vendedor]) {
            vendedores[v.vendedor] = 0;
        }
        vendedores[v.vendedor] += v.total;
    });

    let mejorVendedor = "";
    let maxVenta = 0;

    for (let nom in vendedores) {
        if (vendedores[nom] > maxVenta) {
            maxVenta = vendedores[nom];
            mejorVendedor = nom;
        }
    }

    console.log("Total de ventas realizadas:", ventas.length);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
    console.log("Unidades vendidas por producto:");
    for (let p in productosVendidos) {
        console.log("- " + p + ": " + productosVendidos[p] + " unidades");
    }
    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + maxVenta + ")");
}


//potencia();
//numerosAleatorios();
//pelicula();
ventasTienda();