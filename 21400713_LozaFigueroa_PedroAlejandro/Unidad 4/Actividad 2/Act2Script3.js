/*3. Elabora un programa que genere un número aleatorio entre el
número 2 y 10, y después escriba la tabla de multiplicar del número generado.*/


let num = Math.floor(Math.random()*9)+2;

for (i=10; i>=0;i--){
    
    console.log(num+"*"+i+"="+num*i);
}