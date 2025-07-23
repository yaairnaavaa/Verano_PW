/*1*/
function potencia(){
    let num = prompt("Introduce un número");
    let pow = prompt("introduce la potencia de ese número")
    let res = 1;
    for(let i = 0; i < pow; i++){
        res *= num;
    }
    console.log(res);  
}

/*2*/
function numMayor(){
    let numeros=[];
    let mayor=0;

    for(i=0; i<10;i++){
        let num = Math.floor(Math.random()*101);
        console.log(num);
        if(mayor<num) mayor = num;
        numeros[i] = i;
    }
    console.log("El número mayor es: " + mayor);
}

/*3*/
function pelicula() {
    let pelicula = {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        lanzamiento: "15 de marzo, 1972",
        protagonista: "Michael Corleone",
        recaudiacion: 777777777,
    };
    console.log("Pelicula:", pelicula);
    delete pelicula.protagonista;
    console.log("Pelicula sin protagonista:", pelicula);

    pelicula.productora = "Paramount Pictures";
    console.log("Pelicula con productora", pelicula);
} 

/*4*/
function Tienda() {
    let ventas = [];
    let vendedor ="";
    let totalIngresos = 0;
    let productosVendidos = {};
    let vendedores = {};

    do{
        vendedor = prompt("Vendedor del producto:");
        let producto = prompt("Nombre del producto:");
        let cantidad = parseInt(prompt("Cantidad:"));
        let precio = parseFloat(prompt("Precio:"));

        if(vendedor != ""){
            ventas.push({
                vendedor: vendedor,
                producto: producto,
                cantidad: cantidad,
                precio: precio,
                total: cantidad * precio
            });
        }
        if(cantidad > 0 && precio > 0){
            totalIngresos += cantidad*precio;
        }   
    }while (vendedor !="")

    ventas.forEach(v => {
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

    for (let nombre in vendedores) {
        if (vendedores[nombre] > maxVenta) {
            maxVenta = vendedores[nombre];
            mejorVendedor = nombre;
        }
    }

    console.log("Ventas totales:", ventas.length);
    console.log("Ingresos totales: $" + totalIngresos);
    console.log("Unidades vendidas por producto:");
    for (let p in productosVendidos) {
        console.log("- " + p + ": " + productosVendidos[p] + " unidades");
    }
    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + maxVenta + ")");
}
/*CALLS */
/*potencia();*/
/*numMayor();*/
/*pelicula();*/
Tienda();