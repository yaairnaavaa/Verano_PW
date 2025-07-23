function map() {
  const numeros = [1, 2, 3, 4];
  const dobles = numeros.map((numero) => (numero % 2 === 0 ? "par" : "impar"));
  console.log(dobles);
}

function filter(){
    const numeros = [5,10,15,20];
    const mayoresQue10 = numeros.filter(num => num > 10)
    console.log(mayoresQue10)
}

function reduce() {
    const numeros = [1,2,3,4]
    const suma = numeros.reduce((num,ac) => (ac = ac+num),0)
    console.log(suma)
}

function foreach() {
    const nombres = ['Ana', 'Luis', 'Carlos', "Marta", 'Pedro'];
    nombres.forEach(nombre => console.log(`Hola ${nombre}`))
}

function objeto() {
    let persona = {
        nombre: "Ramses",
        edad: 20,
        ciudad: "Tepic",
        imprimirNombre : function(){ console.log(this.nombre)}
    }
    console.log(persona)
    persona.carrera = 'ISC'
    console.log(persona)
    delete persona.ciudad
    console.log(persona)
    persona.imprimirNombre()
}
// map();
// filter()
// reduce()
// foreach()
objeto()