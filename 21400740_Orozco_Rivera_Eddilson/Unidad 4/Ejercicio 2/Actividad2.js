//1. numero aleatorio mayor

function dosAleatorios(){
    let n1 = parseInt(Math.random()*100);
    console.log("Numero 1: "+ n1);
    
    let n2 = parseInt(Math.random()*100);
    console.log("Numero 2: " + n2);
   
    if(n1 > n2){
        console.log("Numero 1: " + n1 + " Es mayor a numero 2: " + n2);
    }else{
        console.log("Numero 2: " + n2 + " Es mayor numero 2: " + n1);
    }
}


//dosAleatorios();


//2. Tienda departamental
function departamental(){
    let valor = prompt("Ingresa total de ventas: ");
    let comision;
    if (valor < 10000 && valor >= 5000){
    comision = valor*0.15;
    } else {
        comision = valor*0.10;
    }

    console.log("Su comision es de: " + comision);
}

//(departamental();

//3. Tabla de mutiplicar

function multiplicar(){
    let n1 = parseInt(Math.random() * 9)+2 ;
    let res;

    for (var i= 1; i <= 10; i++) {
        res = i * n1;
        console.log(i + " * " + n1 + " = " + res);
    }


}

//multiplicar();

//4. par o impar

function ParImpar(){
     for (var i= 1; i <= 10; i++) {
        let numero = prompt("Ingresa un numero: ");

        if(numero%2 == 0){
            console.log("Numero par: "+ numero);
        }else{
            console.log("Numero impar: "+numero);
        }   
    }
}

//ParImpar();

//5. entre 0y5 hasta 0

function hastaCero(){
    let numero;
    do {

         numero = parseInt(Math.random()*6);
        console.log(numero);

        }while(numero !== 0)
    console.log("Cero encontrado: AUTODESCTRUCCION");
}

//hastaCero();