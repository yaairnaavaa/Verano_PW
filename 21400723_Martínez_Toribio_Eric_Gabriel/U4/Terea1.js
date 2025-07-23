//Comparacion de numeros aleatorios
function compararNumerosAleatorios() {
  let num1 = parseInt(Math.random() * 10);
  let num2 = parseInt(Math.random() * 10);
  console.log(num1);
  console.log(num2);

  if (num1 === num2) {
    console.log("Los números son iguales");
  } else if (num1 > num2) {
    console.log("El número uno es mayor que el dos");
  } else {
    console.log("El número dos es mayor que el uno");
  }
}


//Calculo de comision
function calcularComision() {
  let entrada = prompt("Ingresa un número");
  let numero = parseInt(entrada);

  if (isNaN(numero) || numero < 5000 || numero > 30000) {
    alert("Número inválido");
  } else if (numero < 10000) {
    alert("Usted tendrá: " + ((numero / 100) * 10) + "$ de comisión");
  } else {
    alert("Usted tendrá: " + ((numero / 100) * 15) + "$ de comisión");
  }
}

//Tablas de multiplicar
function mostrarTablaAleatoria() {
  let numero = Math.floor(Math.random() * 10) + 2;
  console.log("Del número: " + numero + "\nSu tabla de multiplicar es:");
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
  }
}

//clasificacion de numeros
function clasificarNumeros() {
  const numeros = [];
  const pares = [];
  const impares = [];

  for (let i = 0; i < 10; i++) {
    let entrada = prompt("Ingresa un número entre 1 y 100");
    let numero = parseInt(entrada);

    if (isNaN(numero) || numero < 1 || numero > 100) {
      alert("Número inválido. Por favor ingresa un valor entre 1 y 100.");
      i--;
    } else {
      numeros.push(numero);
      if (numero % 2 === 0) {
        pares.push(numero);
      } else {
        impares.push(numero);
      }
    }
  }

  console.log("En total se tienen " + pares.length + " números pares: " + pares);
  console.log("En total se tienen " + impares.length + " números impares: " + impares);
}

//generar hata 0
function generarHastaCero() {
  let aleatorio;
  do {
    aleatorio = Math.floor(Math.random() * 7);
    console.log(aleatorio);
  } while (aleatorio !== 0);
}

compararNumerosAleatorios()
calcularComision()
mostrarTablaAleatoria()
clasificarNumeros()
generarHastaCero()
