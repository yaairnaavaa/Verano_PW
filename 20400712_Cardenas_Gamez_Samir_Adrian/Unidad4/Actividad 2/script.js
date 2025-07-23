
function calificacionFuncion(){
let calificacion =parseInt(
    prompt("ingresa tu calificacion")

);
console.log(calificacion);

if (calificacion<70)
{
    console.log("Reprobado");
}else if(calificacion<80){
    console.log("suficiente"
    )
} else if(calificacion>90){
    console.log("notable")
}else{
    console.log("Excelente")
}
}

//calificacionFuncion();
function diaSemana(){
    let dia=prompt("ingrese el dia de la semana").toLowerCase();
    switch(dia){
        case "lunes":
            console.log("el dia es lunes")
            break;
        case "martes":
            console.log("El dia es martes")
            break;
        case "miercoles":
            console.log("El dia es miercoles")
            break;              
        case "jueves":
            console.log("el dia es jueves")
            break;
        case "viernes":
            console.log("El dia es viernes")
            break;
        case "sabado":
            console.log("El dia es sabado")
            break;    
       case "domingo":
            console.log("El dia es domingo")
            break;       
            default:
            console.log("Dia invalido")
            break;
        }
}
//diaSemana();
function comparadorAleatorios(){
    let numero1=  parseInt(Math.random()*10);
    let numero2=parseInt(Math.random()*10);
    if(numero1==numero2){
        alert("los numeros son iguales")
    } else if (numero1>numero2){
        alert("el numero 1: "+ numero1+" Es mayor que el numero 2:  "+ numero2)
    }else{
       alert("el numero 2: "+ numero2+" Es mayor que el numero 1:  "+ numero1)
    }

}
//comparadorAleatorios();
function tiendaDepartamental(){
    let venta= parseFloat(prompt ("Ingrese la venta del empleado"))
    if(venta>30000 || venta<5000){
        alert("Numero invalido")
    } else if(venta<=10000){
       let resultado= venta*0.1
       alert("ok 10%:"+resultado);
    }else if(venta>10000){
        let resultado= venta*0.15
        alert("Felicidades 15%:"+resultado);

    }
}
//tiendaDepartamental();
function multiplicadorAleatorios(){
    let numero1=  parseInt((Math.random()*9 )+2);
    for(let i=1; i<11;i++)
    console.log(numero1 *i)
    
    }
//    multiplicadorAleatorios();

function paresInpares1A100(){
    let numerosImpares=0, numerosPares = 0;
    for(let i=1;i<11;i++){
        let numero1=  parseInt((Math.random()*100 )+1);
        console.log(numero1)
        if (((parseInt(numero1))%2)==1){
            numerosPares=numerosPares+1
            //console.log("Pares: "+numerosPares);
        }else{
            numerosImpares=numerosImpares+1
         //   console.log("Impares: "+numerosImpares)
        }
    }
    console.log("Numeros impares: "+numerosImpares+ " Numeros pares: "+numerosPares)    
}
//paresInpares1A100();

function Numeroshasta0(){
     let x =1;
     do{
         
         x  =parseInt(Math.random()*5)
        console.log (x);
    }while (x!=0)

}
//Numeroshasta0();
function saludar(){
    let nombres=["Ana "+" luis "+" Carlos "+" marta "+" pedro "];
    console.log(nombres)
}

saludar();