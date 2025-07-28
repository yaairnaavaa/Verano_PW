//1. 
function potencia(base,exponente){
    let resultado = 1;    

    for(let i = 1; i <= exponente; i++){
        resultado =+ resultado * base;
    }
    return console.log(resultado);
}

//potencia(2,4);


//2. 
function MasGrande(){
    let numeros = []
    for(let i = 1; i <= 10; i++){
        numeros.push(parseInt((Math.random()*100)+1));
    }
        console.log(numeros);
    
        let max = 0;
    for(let i = 0; i < numeros.length; i++){    
        if(numeros[i] > max){
            max = numeros[i];
        }
    }

    console.log("Numero mayor: "+max)
}

//MasGrande();

//3. Peliculon
function objeto(){
    let pelicula = {
        titulo: "La granja",
        director: "Steve Oedekerk",
        año: "2006",
        protagonista: "Otis la vaca",
        recaudacion: "$116.5"
    }
    console.log(pelicula);
    delete pelicula.protagonista;
    console.log(pelicula);
}

//objeto();

//4. Tienda
function tienda(){
    let ventas = [];
    let continuar = true;

    while (continuar) {
        let nombre = prompt("Ingrese Nombre:");
        let producto = prompt("Ingrese producto:");
        let cantidad = parseInt(prompt("Cantidad:"));
        let precio = parseFloat(prompt("Precio:"));


        let venta = {
            vendedor: nombre,
            producto: producto,
            cantidad: cantidad,
            precio: precio,
            total: cantidad * precio
        };

        ventas.push(venta);

        let res = prompt("Desea continuar?(si/no)");
        if(res == "no"){
            continuar = false;
        }
        console.log(venta);
    }

    let total = ventas.length;
    let ingresos = ventas.reduce((suma, venta) => suma + venta.total,0);

    let TPV = {};
    ventas.forEach(venta => {
        TPV[venta.producto] = (TPV[venta.producto] || 0) + venta.cantidad;
    });

    let TV = {};
    ventas.forEach(venta => {TV[venta.vendedor] = (TV[venta.vendedor] || 0)+venta.total;

    });

    let mejorVendedor = "";
    let maxVenta = 0;
    for (let vendedor in TV) {
        if (TV[vendedor] > maxVenta) {
            maxVenta = TV[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas: "+total);
    console.log("Total de ingresos: "+ingresos);
    
    console.log("Unidades vendidas por producto:");
    for (let producto in TPV) {
        console.log(`- ${producto}: ${TPV[producto]} unidades`);
    }
    
    console.log("Total por vendedor:");
    for (let vendedor in TV) {
        console.log(`- ${vendedor}: $${TV[vendedor]}`);
    }
    
    console.log(`Vendedor con mayores ventas: ${mejorVendedor} con $${maxVenta}`);
}



tienda();

