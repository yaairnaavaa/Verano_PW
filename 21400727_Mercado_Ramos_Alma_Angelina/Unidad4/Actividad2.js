//Actividad 2.1
function numerosAleatorios() {
    let num1 = Math.random();
    let num2 = Math.random();
    console.log(num1);
    console.log(num2);

    if (num1 == num2) {
        console.log("Los 2 números son iguales");
        alert("Los 2 números son iguales");
    } else if (num1 > num2) {
        console.log("El numero mayor es: " + num1);
        alert("El numero mayor es: " + num1);
    } else {
        console.log("El numero mayor es: " + num2);
        alert("El numero mayor es: " + num2);
    }
}
numerosAleatorios();

//Actividad 2.2
function comision() {
  let venta;
  let comision;
  do {
    venta = parseInt(prompt("Ingresa tu venta"));
  } while (isNaN(venta) || venta < 5000 || venta > 30000);

  if (venta < 10000) {
    comision = venta * 0.10;
  } else {
    comision = venta * 0.15;
  }
  console.log("La comición que recibira es de: $" + comision);
  alert("La comición que recibira es de: $" + comision);
}
comision();

//Actividad 2.3
function tablaMultiplicar() {
    let min = 2;
    let max = 10;
    let tabla = Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i <= 10; i++) {
        let resultado = tabla * i;
        console.log(tabla + " X " + i + " = " + resultado);
    }
}
tablaMultiplicar();

//Actividad 2.4
function paresImpares() {
    let par = 0;
    let impar = 0;
    let num;
    for (let i = 0; i < 5; i++) {
        do {
            num = parseInt(prompt("Ingresa un número entre el 1 y el 100"));
        } while (isNaN(num) || num < 1 || num > 100);

        if (num % 2 === 0) {
            par++;
        } else {
            impar++;
        }
    }
    console.log(par + " números son PAR y " + impar + " números son IMPAR");
    alert(par + " números son PAR y " + impar + " números son IMPAR");
}
paresImpares();

//Actividad 2.5
function cero() {
    let min = 0;
    let max = 5;
    let esCero = false;
    let numRandom;
    do {
        numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(numRandom);

        if (numRandom == 0) {
            esCero = true;
        } else {
            esCero = false;
        }
    } while (esCero != true);
}
cero();