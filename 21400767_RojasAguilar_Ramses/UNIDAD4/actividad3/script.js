//1
function potencia(base, exponente) {
  let res = 0;
  for (let index = 1; index <= exponente; index++) {
    res = res + base * base;
  }
  return res;
}
// alert(potencia(5,5))

//2
function dos() {
  let numeros = [];
  for (let index = 0; index < 10; index++) {
    numeros[index] = Math.round(Math.random() * 100);
  }
  return numeros.reduce(
    (num, mayor) => (num > mayor ? (mayor = num) : (mayor = mayor)),
    0
  );
}
// console.log(dos())

//3
function objeto() {
  let pelicula = {
    titulo: "La pelicula",
    director: "Guillermo del toro",
    anio: 2011,
    protagonista: "Rango",
    recaudacionTaquilla: 3456783,
  };
  console.log(pelicula);
  delete pelicula.protagonista;
  console.log(pelicula);
  pelicula.productora = "warner bros";
  console.log(pelicula);
}

// objeto()

//4
function registroVenta() {
  let ventas = [];
  let string = "";
  let mensaje = "Producto    |   Unidades vendidas \n";

  //LLENAR DATOS
  while (string !== "para") {
    string = prompt(
      "Ingresa nombre de vendedor, nom prod, cant vendida, precio separados por comas"
    );
    console.log(string);
    if (string != "para") {
      const atributos = string.split(",");
      ventas.push({
        nombreVendedor: atributos[0],
        nombreProducto: atributos[1],
        cantVendida: parseInt(atributos[2]),
        precio: parseFloat(atributos[3]),
      });
    }
  }

  let montoTotal = ventas.reduce(
    (total,venta) => (total = total + venta.cantVendida * venta.precio),
    0
  );

  //   let quienVendioMas = ventas.reduce((venta,monto) => (
  //     monto = venta.
  //   ),0)
  //   console.log(string);
  // let venta = {

  // }
  let cantPersona = 0;
  let persona = "";
  ventas.forEach((venta) => {
    if (cantPersona < venta.cantVendida * venta.precio) {
      cantPersona = venta.cantVendida * venta.precio;
      persona = venta.nombreVendedor;
    }
    mensaje = `${mensaje}${venta.nombreProducto}            ${venta.cantVendida}\n`;
  });

  mensaje = `${mensaje} -----------------------\n`;
  mensaje = `${mensaje} total vendido: ${montoTotal} \n Vendedor que vendió más: ${persona}`;
alert(mensaje)
}

registroVenta();
