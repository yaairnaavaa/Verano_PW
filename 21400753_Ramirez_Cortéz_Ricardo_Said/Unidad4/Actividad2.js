function aleatorio(){
    const numero1 = Math.floor(Math.random() * 100) + 1;
    const numero2 = Math.floor(Math.random() * 100) + 1;

    console.log("Números: " + numero1, "y " + numero2);

    if (numero1 === numero2){
        console.log("Los números son iguales");
    } else{
        const mayor = Math.max(numero1, numero2);
        console.log("Los números no son iguales, el número mayor es: " + mayor);
    }
}

aleatorio();

function calcularComision() {
    let ventas;
    
    do {
        ventas = parseFloat(prompt("Ingrese el total de ventas (entre $5,000 y $30,000): $"));
    } while (isNaN(ventas) || ventas < 5000 || ventas > 30000);
    
    const comision = ventas >= 10000 ? ventas * 0.15 : ventas * 0.10;
    
    console.log("El empleado recibirá $"+comision, "por comisión");
}

calcularComision();

function multiplicaciones() {
    const numero = Math.floor(Math.random() * 9) + 2; 
    console.log("Tabla de multiplicar del "+numero);
    
    for (let i = 1; i <= 10; i++) {
        console.log(numero, "X" + i, "=" + numero * i);
    }
}

multiplicaciones();

function ParesImpares() {
    let pares = 0;
    let impares = 0;
    const numeros = [];
    
    console.log("Números generados:");
    for (let i = 0; i < 10; i++) {
        const num = Math.floor(Math.random() * 100) + 1;
        numeros.push(num);
        console.log(num);
        
        num % 2 === 0 ? pares++ : impares++;
    }
    
    console.log("Cantidad de números pares: " + pares);
    console.log("Cantidad de números impares: " + impares);
}

ParesImpares();


function cero() {
    console.log("Generando números (0-5):");
    let num;
    
    do {
        num = Math.floor(Math.random() * 6); 
        console.log(num);
    } while (num !== 0);
    
    console.log("Se generó el número 0");
}

cero();
/*function map(){
    const numeros = [1,2,3,4,5];
    console.log(numeros);
    const dobles = numeros.map(n => {
        if(n%2 == 0){
            return "Par";
        }
        return "Impar";
    });
    console.log(dobles);
}*/