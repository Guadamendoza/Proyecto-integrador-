let nombre = "Guadalupe";

let edad = 20;

console.log(`Hola, me llamo ${nombre} y tengo ${edad}`);

//numeros al cuadrado 
const numeros = [3, 7, 12, 5, 2];
const cuadrados = numeros.map(num=>num * num);
console.log("cuadrados", cuadrados);


//numeros mayores a 5 
const mayores5 = numeros.filter(num=> num>5);
console.log("mayores a 5", mayores5);

// par o impar 
const paroimpar = num => (num %2 === 0? "Par" : "Impar"); 
console.log (("7 es:", paroimpar(7))); 
console.log(("8) es:", paroimpar(8))); 
