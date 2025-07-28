/*ECAMEN DE LA UNIDAD CUATRO TABLA DE <MULTIPLICAR> crear un programa 
que pida al usuario un numero del 1 al 10 mediante un promt() y que mu
estre el resultado de la tabla del multipliciar del 1 al 10 en la cons
ola</MULTIPLICAR> */ 
function actividad1(){
    let n =  -1;
    while (n <= 1 || n >= 10) {
    n = parseInt(prompt('dame un numero del 1  al 10'));
    }
    for (let i = 1; i <= 10; i++) {
    console.log(n + ' x ' + i + ' = ' + n * i);
}
}


/* ejercicio 2 promedio de calificaciones
pide al usuario que ingrese 5 calificaciones usando propt() dentro de un ciclo 
guardalasen un arreglo y al final muestra
todas las calificaciones
el promedio y si el estudiante aprobo (>=6) o no */
function actividad2(){
    let Cal=[];
    for (let i = 0; i < 5; i++) {
    Cal[i] = parseInt(prompt('dame la calificacion No. '+i));
    }
    let sum=0;
    for (let index = 0; index < Cal.length; index++) {
        sum= sum+Cal[index];
    }
    console.log(Cal);
    console.log("promedio: "+(sum/Cal.length))
    if((sum/Cal.length)>=6)console.log("Aprobado");
    else console.log("Reprobado");

}

/*genera 20 numeros aleatorios entre 1 y 100, guardalos en un arreglo y 
muestra cuantos son pares y impares */
function actividad3(){
    let num=[], par=0, inpar=0;
    for (let index = 0; index < 20; index++) {
        num[index]= parseInt(Math.random()*100);
        if(num[index]%2==0)par++;else inpar++;
    }
    console.log(num); console.log("Numeros pares: "+par); 
    console.log("Numeros inpares: "+inpar);
}


/*crear un programa que permita ingresar la informacion de varios empleados 
(preguntar al usuario si desesa guardar otro empleado al terminar el registro y
guardar cada empleado como un objetos con propiedades nombre, edad y salario) 
al finalizar mostrar cuantos empleados son 
calcular el salario promedio
mostrar los nombres de los empleados mayores de 30 anios
*/
function actividad4(){
    let fl= true;
    let sum=0;
    let may30=[];
     
    let arr=[]

        

    while (fl){
        let nom=prompt("Dame el nombre"), e=prompt("Dame la edad"),
        sal=prompt("Dame el salario");sum=sum+sal;
        if(e>=30) may30.push(nom)
        arr.push({nombre:nom, edad:e, salario:sal});
        
        if(prompt("0 / 1")==0)fl=!fl;
    }
    

    
    
        

    console.log(arr);
    console.log(sum/arr.length);
    console.log(may30);
    console.log(fl);
    console.log(arr);

    
}
/*simular un sistema que calcule la comicion de ventas y que pida al
usuario el nombre del vendedor, monto de venta y calcular la comicion
*si vendio menos de 10,000 = 10%
*si vendio 10,000 o mas %15

guardar la venta como un objeto en un arreglo, permite ingresar
multiples ventas hasta que se ingrese salir
al final mostrar un total de ventas y la comision total pagada

*/



function actividad5(){
    let venta=[];
    let fl= true;
    let sum=0;
    let may30=[];
     
    let arr=[]

        

    while (fl){
        let nom=prompt("Dame el nombre"), e=prompt("Dame total de la venta"),com=0;
        if(e<10000)com=(e*0.10);
        if(e>=10000)com=(e*0.15);

        sum=sum+com;
        if(e>=30) may30.push(nom)
        venta.push({nombre:nom, venta:e, comicion:com});
        


        if(prompt("continuar? no 0 / si 1")==0)fl=!fl;
    }


    console.log(venta);
    console.log("total de ventas"+ ventas.length);
    console.log("total de comiciones"+ sum);


}

actividad5();
/**crear en una carperta unidad 4 para agregar el examen y subir los archivos */