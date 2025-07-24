function potencia() {
    let base = prompt("Ingrese la base:");
    let exponente = prompt("Ingrese el exponente:");
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    console.log(resultado);
}

//potencia();

function numeroMayor() {
  let numeros = [];
  for (let i=0;i<10;i++) {
    let numeroAleatorio = Math.floor(Math.random() * 101);
    numeros.push(numeroAleatorio);
  }

  console.log("Números generados:", numeros);
  let numeroMayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor) {
      numeroMayor = numeros[i]; 
    }
  }
  console.log("Número más grande:", numeroMayor);
}

//numeroMayor();

function peli() {
  let pelicula = {
    titulo: "The Matrix",
    director: "Lana y Lilly Wachowski",
    año: 1999,
    protagonista: "Keanu Reeves",
    recaudacion: 463517383
  };

  console.log("Película:", pelicula);

  delete pelicula.protagonista;
  console.log("Eliminando protagonista:", pelicula);

  pelicula.productora = "Warner Bros.";
  console.log("Agregando productora:", pelicula);
}

//peli();

function registroVentas() {
  let ventas = [];
  let continuar = true;

  while (continuar) {
    let vendedor = prompt("Nombre del vendedor:");
    let producto = prompt("Nombre del producto:");
    let cantidad = parseInt(prompt("Cantidad vendida:"));
    let precio = parseFloat(prompt("Precio unitario:"));

    let venta = {
      vendedor: vendedor,
      producto: producto,
      cantidad: cantidad,
      precio: precio
    };

    ventas.push(venta);

    let respuesta = prompt("Escribe 'si' para salir o cualquier otra cosa para continuar:");
    if (respuesta.toLowerCase() === "si") {
      continuar = false;
    }
  }

  let totalIngresos = 0;
  let uniPorProducto = {};
  let venPorVendedor = {};

  for (let i=0;i<ventas.length;i++) {
    let v = ventas[i];
    let ingreso = v.cantidad*v.precio;
    totalIngresos += ingreso;

    if (uniPorProducto[v.producto]) {
      uniPorProducto[v.producto] += v.cantidad;
    } else {
      uniPorProducto[v.producto] = v.cantidad;
    }

    if (venPorVendedor[v.vendedor]) {
      venPorVendedor[v.vendedor] += ingreso;
    } else {
      venPorVendedor[v.vendedor] = ingreso;
    }
  }

  let mejorVendedor = "";
  let montoMayor = 0;
  for (let nombre in venPorVendedor) {
    if (venPorVendedor[nombre] > montoMayor) {
      montoMayor = venPorVendedor[nombre];
      mejorVendedor = nombre;
    }
  }

  console.log("Total de ingresos: $" + totalIngresos.toFixed(2));
  console.log("Unidades vendidas por producto:");
  for (let producto in uniPorProducto) {
    console.log("- " + producto + ": " + uniPorProducto[producto] + " unidades");
  }
  console.log("Vendedor con más ventas:", mejorVendedor, "($" + montoMayor.toFixed(2) + ")");
}

//registroVentas();