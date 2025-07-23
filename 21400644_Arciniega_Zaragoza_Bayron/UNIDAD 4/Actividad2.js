// Declaración de variables
//#1
function compararNumeros() {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);

    console.log("Número 1:", n1);
    console.log("Número 2:", n2);

    if (n1 === n2) {
        console.log("Son iguales.");
    } else {
        let mayor = n1 > n2 ? n1 : n2;
        console.log("El mayor es:", mayor);
    }
}

//#2
function comision(ventas) {
    if (ventas < 5000 || ventas > 30000) {
        console.log("Cantidad inválida. Debe ser entre 5000 y 30000.");
        return;
    }

    let porcentaje = ventas < 10000 ? 0.10 : 0.15;
    let total = ventas * porcentaje;

    console.log("Ventas:", ventas);
    console.log("Comisión:", total.toFixed(2));
}

//#3
function tablaMultiplicar() {
    let numero = Math.floor(Math.random() * 9) + 2; // entre 2 y 10
    console.log("Tabla del", numero);

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
//#4
function contarParesImpares() {
    let lista = [];
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 10; i++) {
        let n = Math.floor(Math.random() * 100) + 1;
        lista.push(n);
        if (n % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log("Números generados:", lista);
    console.log("Cantidad de pares:", pares);
    console.log("Cantidad de impares:", impares);
}

//#5 . 
    function iniciarGeneracion() {
        console.log("Generando números aleatorios entre 0 y 5");

        function generar() {
            let numero = Math.floor(Math.random() * 6); // aleatorio entre 0 y 5
            console.log("Número generado:", numero);

            if (numero !== 0) {
                setTimeout(generar, 500); 
            } else {
                console.log("Se genero el 0");
            }
        }

        generar();
    }

//compararNumeros();
//comision(12000);
//tablaMultiplicar();
//contarParesImpares();
iniciarGeneracion();