//Actividad 3.1
function potencia(base, exponente) {
    let resultado = base;
    if (exponente == 0) {
        resultado = 1;
    }else {
        for (let i = 1; i < exponente; i++) {
            resultado = resultado * base;
        }
    }
    console.log(resultado);
}
potencia(
    parseInt(prompt("Ingresa el numero base")),
    parseInt(prompt("Ingresa el exponente")));

//Actividad 3.2
function numeroMasGrande() {
    const numeros = [];
    let min = 0;
    let max = 100;
    let n = 0;
    for (let i = 0; i <= 9; i++) {
        numeros[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(numeros);
    const numeroMas = numeros.forEach(num => {
        if (num > n) {
            n = num;
        } else {
            n = n;
        }
    });
    console.log(n);
    console.log(Math.max(...numeros));
}
numeroMasGrande();

//Actividad 3.3
function peliculas() {
    let protagonistas = ["Nico Parker", "Mason Thames", "Gerard Butler", "Nick Frost", "Julian Dennison", "Gabriel Howell", "Bronwyn James", "Harry Trevaldwyn", "Peter Serafinowicz", "Ruth Codd"];
    let pelicula = {
        titulo: "Cómo entrenar a tu dragón",
        director: "Dean DeBlois",
        year: 2025,
        protagonista: function(){
            protagonistas.forEach(name => console.log(name));
        },
        recaudacion: "$580,912,140"
    }
    console.log(pelicula);
    pelicula.protagonista();
    delete pelicula.protagonista;
    console.log(pelicula);
    pelicula.productora = ["DreamWorks Animation", "Marc Platt Productions"];
    console.log(pelicula);
}
peliculas();

//Actividad 3.4
function registroVentas() {
    let ventas = [];
    for (let i = 0; i < 6; i++) {
        let vendedor = prompt(`Venta #${i+1} - Nombre del vendedor:`);
        let producto = prompt("Nombre del producto:");
        let cantidad = parseInt(prompt("Cantidad vendida:"));
        let precio = parseFloat(prompt("Precio unitario"));
        
        ventas.push({
            vendedor,
            producto,
            cantidad,
            precio,
            total: cantidad * precio
        });
    }

    let totalIngresos = ventas.reduce((sum, venta) => sum + venta.total, 0);
    let unidadesPorProducto = {};
    let ingresosPorVendedor = {};

    ventas.forEach(v => {
        unidadesPorProducto[v.producto] = (unidadesPorProducto[v.producto] || 0) + v.cantidad;
        ingresosPorVendedor[v.vendedor] = (ingresosPorVendedor[v.vendedor] || 0) + v.total;
    });

    let mejorVendedor = Object.keys(ingresosPorVendedor).reduce((a, b) =>
        ingresosPorVendedor[a] > ingresosPorVendedor[b] ? a : b
    );

    console.log("Total de ventas realizadas:", ventas.length);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
    console.log("Unidades vendidas por producto:");
    for (let prod in unidadesPorProducto) {
        console.log(`- ${prod}: ${unidadesPorProducto[prod]} unidades`);
    }
    console.log(`Vendedor con más ventas: ${mejorVendedor} ($${ingresosPorVendedor[mejorVendedor].toFixed(2)})`);
}
registroVentas();