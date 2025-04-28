const productos = [
  { nombre: "Notebook", precio: 1200 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Auriculares", precio: 80 }
];

const Mayoracien = productos.filter(producto=> producto.precio > 100); 
console.log("Productos mayor a 100:", MayoraCien);


const producto = productos.map(producto=> `${producto.nombre}: $${producto.precio}`);
console.log("Producto:", producto);


const preciotal = productos.reduce(total, producto => total + producto.precio, 0);
console.log( "El total es:", preciototal);

const MenoraCien = productos.filter(producto => producto.precio < 100);
productos.map(producto.nombre.toLowercase() ); 
console.log(" Productos menores a 100", MenoraCien)
