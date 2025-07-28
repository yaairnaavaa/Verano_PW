function potencia(){
    let base = parseInt(prompt("Base"))
    let exponente = parseInt(prompt("Exponenente"))
    console.log(base**exponente)
}

function aleatorio(){
    let cadena = []
    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        console.log(`Número ${i + 1}: ${numero}`);
        cadena.push(numero)
    }
    const mayor = Math.max(...cadena);
    console.log(`Numero más alto: ${mayor}`)
}

function manejarPelicula() {
    let pelicula = {
        titulo: "El viaje de Chihiro",
        director: "Hayao Miyazaki",
        añoLanzamiento: 2001,
        protagonista: "Chihiro Ogino",
        recaudacion: "355 millones de dólares"
    };

    console.log("Contenido inicial del objeto:");
    console.log(pelicula);

    delete pelicula.protagonista;

    console.log("\nDespués de eliminar el atributo 'protagonista':");
    console.log(pelicula);

    pelicula.productora = "Studio Ghibli";

    console.log("\nDespués de agregar el atributo 'productora':");
    console.log(pelicula);
}

function registrarVentas() {
    const ventas = [];

    while (true) {
        const vendedor = prompt("Nombre del vendedor (o escribe 'salir' para terminar):");
        if (vendedor.toLowerCase() === "salir") break;

        const producto = prompt("Nombre del producto:");
        const cantidad = parseInt(prompt("Cantidad vendida:"), 10);
        const precio = parseFloat(prompt("Precio unitario:"));

        if (isNaN(cantidad) || isNaN(precio)) {
            alert("Cantidad o precio inválido. Intenta de nuevo.");
            continue;
        }

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        });
    }

    console.log(`\nTotal de ventas realizadas: ${ventas.length}`);

    const totalIngresos = ventas.reduce((total, venta) => total + (venta.cantidad * venta.precio), 0);
    console.log(`Total de ingresos: $${totalIngresos.toFixed(2)}`);

    const productos = {};
    ventas.forEach(venta => {
        if (!productos[venta.producto]) {
            productos[venta.producto] = 0;
        }
        productos[venta.producto] += venta.cantidad;
    });

    console.log("Unidades vendidas por producto:");
    for (let producto in productos) {
        console.log(`. ${producto}: ${productos[producto]} unidades`);
    }

    const vendedores = {};
    ventas.forEach(venta => {
        const monto = venta.cantidad * venta.precio;
        if (!vendedores[venta.vendedor]) {
            vendedores[venta.vendedor] = 0;
        }
        vendedores[venta.vendedor] += monto;
    });

    let mejorVendedor = "";
    let maxVentas = 0;
    for (let vendedor in vendedores) {
        if (vendedores[vendedor] > maxVentas) {
            maxVentas = vendedores[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log(`Vendedor con más ventas: ${mejorVendedor} ($${maxVentas.toFixed(2)})`);
}




function menu(){
    let opcion = parseInt(prompt("Ingrese opcion:\n 1: Potencia\n 2: Aleatorio\n 3: Pelicula\n 4: Pares e Impares "))
    switch(opcion){
        case 1:
            potencia();
        case 2:
           aleatorio()
        case 3:
           manejarPelicula();
        case 4:
            registrarVentas();  
    }
}
menu();
