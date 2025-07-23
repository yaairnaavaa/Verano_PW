/* EJERCICIO 1
Crea un programa que pida al usuario un numero de 1 al 10 mediante prompt
y muestre su tabla de multiplicar del 1 al 10 en consola
*/
function tablas() {
    let numero = 0;
    while (numero < 1 || numero > 10) {
        numero = prompt('¿Qué tabla quieres leer? (1 al 10)');
    }
    for (i = 0; i < 10; i++) {
        console.log(numero + ' x ' + (i + 1) + ' = ' + numero * (i + 1));
    }
}

/*EJERCICIO 2
Pide al usuario que ingrese 5 calificaiones (usando prompt()
dentro de un ciclo), guárdalas en un arreglo y al final muestra:

1. Todas las calificaciones
2. El promedio
3. Si el estudiante aprobó (>=6) o no
*/
function calificacion(){
    let cal;
    califs = [];
    prom = 0;
    for(i=0; i<5; i++){
        cal=-1;
        while (cal < 0 || cal > 10) {
            cal = prompt('Ingresa una calificación (1 al 10)');
        }
        califs[i] = cal;
        prom += parseInt(cal);
    }
    prom /= 5;
    console.log("Calificaciones: " + califs);
    console.log("calificación final: " + prom);
    if (prom < 6){
        console.log("REPROBADO")
    }else{
        console.log("APROBADO")
    }
}

/*EJERCICIO 3
Genera 20 números aleatorios entre 1 y 100, guardalos en 
un arreglo y muestra cuántos son pares y cuántos impares
*/
function paresImpares(){
    let num;
    let numeros = [];
    let impar = 0;
    let par = 0;
    for(i=0; i<100; i++){
        numeros[i] = (Math.floor(Math.random()*100)+1);
        if(numeros[i]%2 == 0){
            par++;
        }else{
            impar++;
        }
    }
    console.log(numeros);
    console.log("Números Impares: " + impar);
    console.log("Números pares: "+ par);
}

/*EJERCICIO 4
Crea un programa que permita ingresar información de varios
empleados usando prompt() (preguntar al usuario si desea guardar
otro empleado como un objeto con propiedades: nombre, edad
y salario.)

1. Al finalizar, muetra cuántos empleados se registraron
2. Calcula el salario promedio
3. Muestra los nombres de los empleados mayores a 30 años
*/

function empleado(){
    let empleados = [];
    let confirm = "";
    let registros =0;
    let salProm =0;
    let mayor30 = [];
    while(confirm == ""){
        let nombre = prompt("Ingresa el nombre de un empleado");
        let edad = prompt("Ingresa su edad");
        let salario = prompt("Ingresa su salario");
        confirm = prompt("¿Desea agregar otro empleado? ENTER para continuar y cualquier texto para cancelar");

        empleados.push({
            nombre: nombre,
            edad: edad,
            salario: salario
        });

        if(edad >= 30){
            mayor30.push(nombre);
        }
        salProm += parseInt(salario);
        registros++;
    }
    salProm /= registros;

    console.log("Número de empleados: " + registros);
    console.log("Salario promedio: " + salProm);
    console.log("Empleados mayores a 30 años: " + mayor30);
}
/*EJERCICIO 5
Simula un sistema de comisión de ventas pida al usuario el
nombre del vendedor, monto de venta y calcula su comision.

- si vendió menos de $10 000 =10%
- si vendió $10 000 o más = 15%
*/
//CALLS

//tablas();
//calificacion();
//paresImpares();
empleado();