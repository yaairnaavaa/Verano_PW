function Act2_1(){
num1 = Math.round(100*Math.random());
num2 = Math.round(100*Math.random());


    if(num1>num2){
        console.log(num1 +" (num1) es mayor que "+num2);
    }else if(num2>num1){
        console.log(num2 +" (num2) es mayor que "+num1);
    }else{
        if(num1>num2){
        console.log(num1 +" y "+num2+" son iguales");
        }
    }
}
function Act2_2(){
do{
    num1 = parseInt(prompt('Escribe el valor de venta entre 5,000 y 30,000 para un empleado'));
    if(num1 >30000 || num1<5000)console.log('Valor incorrecto'); 

}while(num1 >30000 || num1<5000);
    if(num1>=10000){
        console.log('El empleado tiene una comision del 15%, sus ventas son: '+num1+' y su comision es: '+((num1*15)/100));
    }else{
        console.log('El empleado tiene una comision del 10%, sus ventas son: '+num1+' y su comision es: '+((num1*10)/100));
    }
 
}

function Act2_3(){
num1 = Math.round(10*Math.random());

    if(num1<=1)num1=2;
    for(i=1;i<=10;i++){
        console.log(i + " * "+ num1 + " = " + i*num1)
    }

}

function Act2_4(){
num=0;
par=0;
impar=0;

    for(i=1;i<=10;i++){
        num=Math.round(100*Math.random());
        console.log(num)
        if(num%2){
            impar++;
            console.log("impar");
        }else{
            par++;
            console.log("par");
        }
    }
console.log("Los numeros pares son: "+par+" y los impares son: "+impar);
}

function Act2_5(){
    i=0;
    do{
        num1 = Math.round(5*Math.random());
        i++;
        console.log("Iteracion "+i+": "+num1);
    }while(num1!=0);
    console.log("Fin");

}
Act2_1();
Act2_2();
Act2_3();
Act2_4();
Act2_5();
