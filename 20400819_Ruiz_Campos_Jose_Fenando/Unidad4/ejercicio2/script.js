function Ejercicio_1() {
  let number_1 = Math.floor(Math.random() * 100);
  let number_2 = Math.floor(Math.random() * 100);

  console.log("Numero 1: " + number_1);
  console.log("Numero 2: " + number_2);

  if (number_1 == number_2) {
    console.log("Los numeros son iguales");
  } else {
    console.log("Los numeros son diferentes");
  }
}

function Ejercicio_2() {
  let total_Ventas = parseInt(prompt("Ingrese el total de ventas:"));
  let comision = 0;
  if (total_Ventas > 5000 && total_Ventas <= 30000) {
    if (total_Ventas <= 10000) {
      comision = 0.1; // 10% de comision
      console.log("La comisión es: " + (total_Ventas * comision));
    }
    if (total_Ventas > 10000 && total_Ventas <= 30000) {
      comision = 0.15; // 15% de comision
      console.log("La comisión es: " + (total_Ventas * comision));
    } else if (!(total_Ventas <= 10000)) {
      console.log(
        "No se puede calcular la comision, introduzca un valor valido"
      );
    }
  } else {
    console.log(
      "No se puede calcular la comision, introduzca un valor valido"
    );
  }
}

function Ejercicio_3() {
  let numero = Math.floor(Math.random() * 9) + 2;
  console.log("Tabla de multiplicar del " + numero + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + numero * i);
  }
}

function Ejercicio_4() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    let pares = numeros.filter(num => num % 2 === 0);
    let impares = numeros.filter(num => num % 2 !== 0);
    console.log("Cantidad numeros pares: " + pares.length);
    console.log("Cantidad numeros impares: " + impares.length);
}

function Ejercicio_5() {
    let numeros = [];
    let num;
    do {
        num = Math.floor(Math.random() * 6);
        numeros.push(num);
    } while (num !== 0);
    console.log("Numeros generados: " + numeros.join(", "));
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Menu:\n1. Numeros randoms.\n2. Tienda departamental.\n3. Tabla de multiplicar.\n4. 10 Numeros aleatorios.\n5. Numeros continuos.\n6. Salir.\nIngrese una opcion:"
        );
        switch (opcion) {
            case "1":
                Ejercicio_1();
                break;
            case "2":
                Ejercicio_2();
                break;
            case "3":
                Ejercicio_3();
                break;
            case "4":
                Ejercicio_4();
                break;
            case "5":
                Ejercicio_5();
                break;
            case "6":
                console.log("Saliendo del menú...");
                break;
            default:
                console.log("Opcion no valida");
        }
    } while (opcion !== "6");
}

menu();
