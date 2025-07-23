//Ejercicio 1

function potencia(base, exponente){
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}

//console.log(potencia(5,1));


//Ejercicio 2
function numMayor(){
    const numero = [];
    for(let i=0; i<10; i++){
        numero.push(Math.floor(Math.random()*101));
    }

    let mayor = numero [0];
    for(let i=1; 1 < numero.length; i++){
        if(numero[i] > mayor){
            mayor = numero[i];
        }
    }

    console.log("Numeros: " + numero);
    console.log("Numero mayor: " + mayor);
}


//Ejercicio 3
function Pelicula() {
    const pelicula = {
        titulo: "4 fantasticos",
        director: "???",
        año: 2025,
        protagonista: "???",
        recaudacion: "???"
    };
    
    console.log("Película: ", pelicula);
    
    delete pelicula.protagonista;
    console.log("Recaudación:", pelicula);
    
    pelicula.productora = "Marvel";
    console.log("productora:", pelicula);
}

//Pelicula();

//Ejercicio 4
function Ventas() {
    const ventas = [];
    let continuar = true;

    while (continuar) {
        const vendedor = prompt("Nombre del vendedor:");
        const producto = prompt("Nombre del producto:");
        const cantidad = parseInt(prompt("Cantidad vendida:"));
        const precio = parseFloat(prompt("Precio unitario:"));
        
        ventas.push({
            vendedor, producto, cantidad, precio
        });

        continuar = confirm("¿Continuar?");
    }
    
    const totalVentas = ventas.length;
    const totalIngresos = ventas.reduce((sum, venta) => sum + (venta.cantidad * venta.precio), 0);
    
    const unidadesPorProducto = {};
    ventas.forEach(venta => {
        if (unidadesPorProducto[venta.producto]) {
            unidadesPorProducto[venta.producto] += venta.cantidad;
        } else {
            unidadesPorProducto[venta.producto] = venta.cantidad;
        }
    });
    
    const ventasPorVendedor = {};
    ventas.forEach(venta => {
        const monto = venta.cantidad * venta.precio;
        if (ventasPorVendedor[venta.vendedor]) {
            ventasPorVendedor[venta.vendedor] += monto;
        } else {
            ventasPorVendedor[venta.vendedor] = monto;
        }
    });
    
    let MayorVendedor = "";
    let maxVentas = 0;
    for (const vendedor in ventasPorVendedor) {
        if (ventasPorVendedor[vendedor] > maxVentas) {
            maxVentas = ventasPorVendedor[vendedor];
            MayorVendedor = vendedor;
        }
    }
    
    console.log("Ventas realizadas:", totalVentas);
    console.log("Total de ingresos:", "$" + totalIngresos);
    console.log("Unidades vendidas por producto:");
    for (const producto in unidadesPorProducto) {
        console.log(`- ${producto}: ${unidadesPorProducto[producto]} unidades`);
    }
    console.log(`Vendedor con más ventas: ${MayorVendedor}`);
}
//Ventas();