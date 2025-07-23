//Examen u4: Ejercicio 1 tabla de multiplicar 
//Ejercicio1:Crear un programa que pida al usuario un numero del 1 al 10 mediante prompt() y muestre su tabla de multiplicar del 1 al 10 en consola 


function TablaMultiplicar(){
    let numero = prompt("Agregue un numero del 1 al 10");
if(numero >1 && numero<11){
     console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
}else{
    console.log(`${numero} numero no valido`)
}
   
}

//Ejericicio2:Pide al usuario que ingrese 5 calificaciones (Usando prompt() dentro de un ciclo),guardalas en un arreglo y al final muestra:
//todas las calificaciones
//El promedio
//Si el estudiante aprobo (>=6) o no

function PromedioCalificaciones(){
    let calificacion = [];
    let prom = 0;
    for(let i=1; i <= 5;i++){
       calificacion[i] =  prompt("Agregue la calificacion "+i);
            console.log(calificacion[i])
            
    }
    console.log(calificacion)
    prom = calificacion / 5;
    if(prom >= 6){
        console.log("Aprobaste")
        console.log("El promedio es "+prom);
    }
    else{
        console.log("Reprobaste")
        console.log("El promedio es "+prom);
    }
}


//Ejercicio3: Generar 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo y muestra cuantos son pares y cuantos impares.
function ContarParesImpares(){
    let numeros = [];
    let numerosa = [];
        for(let i=1; i <= 20;i++){
      let numero = Math.floor(Math.random()*100);
            console.log(numero);
            
            if(numero % 2==0){
                numeros[i];
                i++;
            } else{
                
                numero[i];
            }
    }
    console.log("Pares"+numeros);
    console.log("Impares"+numerosa);
    
}

//Ejercicio4: Crea un programa que permita ingresar informacion de
//varios empleados usando prompt()(preguntar al usuario si desea
//guardar otro empleado al terminar el registro) y guarde cada empleado como
//un objeto con propiedades:nombre, edad y salario.

//1.Al finalizar, muestra cuantos empleados se registraron.
//2.Calcular el salario promedio.
//3.Muestra el nombre de los empleados mayores de 30 años
function RegistroEmpleados(){

    do{
    let nombre = prompt("Ingrese nombre");
    let edad = parseInt(prompt("Ingrese la edad"));
    let salario = parseFloat(prompt("Ingrese el salario"));
    prom = 0;
    
    Empleado = {
        Nombres : nombre,
        Edades : edad,
        Salarios : salario
    }
    prom = salario / salario.length;
        console.log(Empleado);
        let se = parseInt(prompt("Deseas guardar a otro empleado? 1=si 2=no"));

}while(se === 1);
}
//Ejercicio5:Simula un sistema que calcule la comision de ventas.
//pide al usuario el nombre del vendedor. moto de venta y calcula su comision:
//*Si vendio menos de $10,000 = 10%
//*Si vendio $10,000 o mas 15%

//1.Guardar cada venta como un objeto en un arreglo.
//2.Permite ingresar multiples ventas (hasta que se ingrese salir).
//al final, muestra el totoal de ventas y la comision total pagada.
function SistemaComision(){
    let ventas = [];
    let comision = parseFloat(ventas);
    let nombre = parseInt(prompt(`Ingresa el nombre del vendedor`));
    venta = prompt("Ingresa la cantidad de la venta");
    if(venta <= 10000){
        console.log("La cantidad de comision es"+comision+.10)
    } else if(ventas >= 10000){
        console.log("La cantidad de comision es"+comision+.15)
    }
        
}

//Metodos
//TablaMultiplicar();
//PromedioCalificaciones();
//ContarParesImpares();
//RegistroEmpleados();
SistemaComision();