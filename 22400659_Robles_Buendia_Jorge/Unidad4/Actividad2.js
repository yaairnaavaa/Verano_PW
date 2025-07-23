/*escribe un programa que genere dos numeros aleatorios y que escriba en consola que numeros se generaron
ademas el programa debera se;alar si los numeros son iguales o cual es mayor */

function Ejercicio1(){
  const numero1 = Math.floor(Math.random() * 100) + 1;
  const numero2 = Math.floor(Math.random() * 100) + 1;

  console.log("Número 1: ", numero1);
  console.log("Número 2: ", numero2);


  if (numero1 === numero2) {
    console.log("Los números son iguales.");
  } else if (numero1 > numero2) {
    console.log("El número "+numero1+" es mayor que "+numero2);
  } else {
    console.log("El número "+numero2+" es mayor que "+numero1);
  }
}




/**una tienda departamental paga a sus empleados el 10 % de comision a quienes vendan menos del $10,000 en articulos
 *  mientras otorganun 15% a quienes ventan $10,000 o mas 
 * hacer un programa que valide ventas desde 5,000 hasta 3mil y que muestre cuanto se va  apagar de comicion 
 */
function Ejercicio2(){
  do {
    venta = parseFloat(prompt("Ingrese el monto de venta (entre $3,000 y $10,000):"));
  } while (venta <= 3000 || venta >= 10000);

  let comision;
  if (venta < 10000) {
    comision = venta * 0.10; 
  } else {
    comision = venta * 0.15; 
  }


}



/**hacer un programa que pida un numero entre 2 y 10 yaque te de la tabala de multiplicar de ese numero */
function Ejercicio3(){
  let numT;
  do {

    numT = parseInt(prompt("Ingrese un número entre 2 y 10 para mostrar su tabla de multiplicar:"));
  } while (numT < 2 || numT > 10);

  for (let i = 1; i <= 10; i++) {
    let resultado = numT * i;
    console.log(numT+" x "+i+" = "+ resultado);
    document.writeln(numT+" x "+i+" = "+ resultado+"<br>");
  }
}

    
Ejercicio3();




/**hacer un programa que obtenga 10 numeros aleatorios del 1 al 100 y diga cuantos de esos son pares y impares */
function Ejercicio4(){
  
  
  let numeros = [];
  let pares = 0;
  let impares = 0;

  for (let i = 0; i <= 10; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    numeros.push(num);

    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log("Números generados:"+ numeros.join(", "));
  console.log("Cantidad de números pares: "+pares );
  console.log("Cantidad de números impares: "+impares);
  document.writeln(" Números generados: " + numeros.join(", ") + "<br>");
  document.writeln(" Pares:  "+pares+" <br>");
  document.writeln("impares: "+impares+" <br>");
}


/**escribe un programa que genere de forma continua numeros entre 0 y el 5 hasta que salga el numero 0 */
function Ejercicio5(){
  let numero;

  do {
    numero = Math.floor(Math.random() * 6);  
    document.writeln("Número generado: "+numero);
  } while (numero !== 0);

  document.writeln("CEROOOO");

}

//document.writeln(parseInt(Math.random()*100));

