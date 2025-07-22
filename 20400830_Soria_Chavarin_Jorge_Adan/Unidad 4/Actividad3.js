
function potencia(b,e){
    for(let i=0;i <1;i++){
        console.log(`${b} ^ ${e} = ${b**e} `);
    }
}

function NumGrande(){
   let numeros = [];

    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 101);
        numeros.push(numero);
    }

    console.log("Números generados:", numeros);

    let maximo = Math.max(numeros);
    console.log("Número más grande del arreglo:", maximo);
    
    return maximo;
    
}


function Pelicula(){
    let movie = {
        titulo: "El planeta del tesoro",director:"John Musker",lanzamiento: "12 de diciembre 2002",Protagonista:"Jim",recaudacion:"140 millones"       
    }
    console.log(movie);
    delete movie.Protagonista;
    console.log(movie);
    movie.productura = "Disney";
    console.log(movie);
    
}



    function VentasTienda(){
         const vendedores = ["Juan", "Ana", "Luis", "María", "Pedro"];
    let ventas = [];
    let continuar = true;

    while (continuar) {

        let lista = vendedores.map((v, i) => `${i}: ${v}`).join("\n");
        let id = parseInt(prompt(`Selecciona el ID del vendedor (0 a 4):\n${lista}`));

        // Validar ID
        if (isNaN(id) || id < 0 || id >= vendedores.length) {
            alert("ID inválido. Intenta nuevamente.");
            continue;
        }

        let vendedor = vendedores[id];
        let producto = prompt("Nombre del producto:");
        let cantidad = parseInt(prompt("Cantidad vendida:"));
        let precio = parseFloat(prompt("Precio unitario:"));

        if (isNaN(cantidad) || isNaN(precio)) {
            alert("Cantidad o precio inválido. Intenta nuevamente.");
            continue;
        }

        ventas.push({
            vendedor,
            producto,
            cantidad,
            precio,
            total: cantidad * precio
        });

        continuar = confirm("¿Deseas registrar otra venta?");
    }

    console.log(`Total de ventas realizadas: ${ventas.length}`);

    let totalIngresos = ventas.reduce((acc, v) => acc + v.total, 0);
    console.log(`Total de ingresos: $${totalIngresos.toFixed(2)}`);

    let unidadesPorProducto = {};
    ventas.forEach(v => {
        unidadesPorProducto[v.producto] = (unidadesPorProducto[v.producto] || 0) + v.cantidad;
    });

    console.log("Unidades vendidas por producto:");
    for (let prod in unidadesPorProducto) {
        console.log(`- ${prod}: ${unidadesPorProducto[prod]} unidades`);
    }

    let ventasPorVendedor = {};
    ventas.forEach(v => {
        ventasPorVendedor[v.vendedor] = (ventasPorVendedor[v.vendedor] || 0) + v.total;
    });

    let topVendedor = Object.entries(ventasPorVendedor).reduce((max, actual) => actual[1] > max[1] ? actual : max);
    console.log(`Vendedor con mayor monto en ventas: ${topVendedor[0]} con $${topVendedor[1].toFixed(2)}`);
}
    
//potencia(2,4);
//NumGrande();
//Pelicula();
VentasTienda();