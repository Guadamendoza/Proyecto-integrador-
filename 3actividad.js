function procesar(array, callback) {
    const resultado = [];
  
    for (let i = 0; i < array.length; i++) {
      resultado.push(callback(array[i]));
    }
  
    return resultado;
  }
  
  // Ejemplo de uso:
  const resultado = procesar([1, 2, 3], x => x * 2);
  console.log(resultado); // [2, 4, 6]
  