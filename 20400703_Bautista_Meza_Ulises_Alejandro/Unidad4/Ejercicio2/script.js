function random(){
    numero1 = Math.random();
    console.log(numero1);
    numero2 = Math.random();
    console.log(numero2);
    if(numero1 == numero2){
        console.log("Son iguales")
    }else if(numero1 > numero2){
        console.log("El primer numero es mayor")
    }else{
        console.log("El segundo numero es mayor")
    }
}

function ventas(){
    let vendio = parseFloat(prompt("Ingrese cuanto vendio entre 5,000 a 30,000, para calcular su comision"))
    if (vendio > 30000) {
        console.log("Te pasaste campeon");
    }else if (vendio < 5000){
        console.log("Nambre papá, ni para los chicles")
    }else if (vendio < 10000){
        console.log("Tendras un 10%")
        console.log(vendio*.1)
    }else{
        console.log("Tendras un 15%")
        console.log(vendio*.15)
    }
}

function multiplicar() {
    function generarEnteroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let numeroAleatorio = generarEnteroAleatorio(2, 10);
    console.log("Tabla del: " + numeroAleatorio);

    function mostrarTablaMultiplicar(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
    mostrarTablaMultiplicar(numeroAleatorio);

}

function contarParesEImpares() {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        console.log(`Número ${i + 1}: ${numero}`);

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Total de números pares: ${pares}`);
    console.log(`Total de números impares: ${impares}`);
}

function buscador0() {

        let numero = Math.floor(Math.random() * 5);
        if (numero == 0) {
            console.log(numero);
        } else {
            console.log(numero);
            buscador0();
        }
}

function menu(){
    let opcion = parseInt(prompt("Ingrese opcion:\n 1: Random\n 2: Ventas\n 3: Tabla de multiplicar\n 4: Pares e Impares\n 5: Numeros random hasta que salga 0  "))
    switch(opcion){
        case 1:
            random();
        case 2:
            ventas();
        case 3:
            multiplicar();
        case 4:
            contarParesEImpares();
        case 5:
            buscador0();
    }
}
menu();