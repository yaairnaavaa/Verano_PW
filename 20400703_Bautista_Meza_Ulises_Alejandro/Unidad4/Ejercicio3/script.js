function potencia(){
    let base = parseInt(prompt("Base"))
    let exponente = parseInt(prompt("Exponenente"))
    console.log(base**exponente)
}

function aleatorio(){
    let cadena = []
    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        console.log(`Número ${i + 1}: ${numero}`);
        cadena.push(numero)
    }
    const mayor = Math.max(...cadena);
    console.log(`Numero más alto: ${mayor}`)
}

function menu(){
    let opcion = parseInt(prompt("Ingrese opcion:\n 1: Potencia\n 2: Aleatorio\n 3: Tabla de multiplicar\n 4: Pares e Impares\n 5: Numeros random hasta que salga 0  "))
    switch(opcion){
        case 1:
            potencia();
        case 2:
           aleatorio()
        case 3:
           
        case 4:
            
        case 5:
           
    }
}
menu();
