puntoUno();
puntoDos();
puntoTres();
puntoCuatro();
puntoCinco();

//PUNTO 1
function puntoUno() {
  const num1 = parseInt(Math.random() * 10);
  const num2 = parseInt(Math.random() * 10);
  num1 === num2
    ? alert(`números son iguales: ${num1}`)
    : alert(`n1 = ${num1}, n2 = ${num2}. El número mayor es: ${Math.max(num1, num2)}`);
  return;
}

//PUNTO 2
function puntoDos() {
  let montoVenta = 0;
  console.log(montoVenta);
  while (montoVenta < 5000 || montoVenta > 30000) {
    montoVenta = parseFloat(prompt("Ingresa un monto de venta"));
  }
  if (montoVenta < 10000) {
    alert(`Por un monto de ${montoVenta}, se otorgará ${montoVenta * 0.1} de descuento`);
  } else {
    alert(`Por un monto de ${montoVenta}, se otorgará ${montoVenta * 0.15} de descuento`);
  }
}

//PUNTO 3
function puntoTres() {
  let numero = parseInt(2 + Math.random() * 8);
  let tabla = `Tabla del ${numero}\n`;
  for (let index = 1; index < 11; index++) {
    tabla = `${tabla} ${numero} X ${index} = ${numero * index}\n`;
  }
  alert(tabla);
}

//PUNTO 4
function puntoCuatro() {
  let numeros = [];
  let pares = 0;
  let impares = 0;

  for (let index = 0; index < 10; index++) {
    numeros[index] = parseInt(prompt("Ingresa un número entero entre el 1 y 100"));

    while (numeros[index] < 1 || numeros[index] > 100) {
      numeros[index] = parseInt(prompt("Ingresa un número entero entre el 1 y 100"));
    }
  }
  let mensaje = `Numeros: \n`;
  numeros.forEach((num) => {
    num % 2 === 0 ? pares++ : impares++;
    mensaje = `${mensaje} ${num} \n`;
  });
  mensaje = `${mensaje} Pares: ${pares} | Impares: ${impares}`;
  alert(mensaje)
}

// PUNTO 5
function puntoCinco() {
  let veces = 0;
  let numero = undefined;
  while (numero !== 0) {
    veces++;
    numero = parseInt(Math.random() * 5);
  }
  alert(`Se consigió 0 en ${veces} intentos`);
  return;
}