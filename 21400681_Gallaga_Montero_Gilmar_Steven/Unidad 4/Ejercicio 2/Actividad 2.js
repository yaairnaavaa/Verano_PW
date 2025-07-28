
//Actividad 1
function NumAleatorios(){
    let Numero1 = Math.floor(Math.random() * 100);
    let Numero2 = Math.floor(Math.random() * 100);



    console.log("Numero Aleatorio: " + Numero1 + "Otro Numero Aleatorio: " + Numero2);
    alert("Numeros Aletrios: " + Numero1 + " y " + Numero2);


}
NumAleatorios();

//Actividad 2
function Ganancias(){
    var porcentaje = 0;
    let Ventas = parseInt(prompt("Cual fue la cantidad Vendida: (5,000 y 30,000)"));
    
    if(Ventas <= 10000){
        porcentaje = 10;
        console.log("Su porcentaje de ganacias es 10%");
        
    } else {
        porcentaje = 15;
        console.log("Su porcentaje de ganacias es 15%");
    }

    let Comision =  parseFloat(Ventas/porcentaje);
    console.log("Ventas fueron: " + Ventas + " Tu Comision fue: " + Comision);
    alert("Ventas fueron: " + Ventas + " Tu Comision fue: " + Comision);
    
} 
Ganancias();


//Actividad 3
function TablaMultiplicar() {
    let numero = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

    console.log("Numero aleatorio: " + numero);
    alert("Numero aleatorio: " + numero);

    let tabla = "Tabla de multiplicar\n";
    tabla += numero + " x 1 = " + (numero * 1) + "\n";
    tabla += numero + " x 2 = " + (numero * 2) + "\n";
    tabla += numero + " x 3 = " + (numero * 3) + "\n";
    tabla += numero + " x 4 = " + (numero * 4) + "\n";
    tabla += numero + " x 5 = " + (numero * 5) + "\n";
    tabla += numero + " x 6 = " + (numero * 6) + "\n";
    tabla += numero + " x 7 = " + (numero * 7) + "\n";
    tabla += numero + " x 8 = " + (numero * 8) + "\n";
    tabla += numero + " x 9 = " + (numero * 9) + "\n";
    tabla += numero + " x 10 = " + (numero * 10) + "\n";

    alert(tabla); 
    console.log(tabla);
}
TablaMultiplicar();

//Actividad 4
function ParesImpares() {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt("Ingresa el numero " + i + ":"));

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert("Cantidad de numeros pares: " + pares + "\nCantidad de numeros impares: " + impares);
}
ParesImpares();


//Actividad 5
function generar() {
    let numero = -1; 

    while (numero !== 0) {
        numero = Math.floor(Math.random() * 6);
        alert("Número generado: " + numero);
    }

    alert(" 0 - Termino GG");
}
generar();
