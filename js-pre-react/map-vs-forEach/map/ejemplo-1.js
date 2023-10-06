//Se utiliza para crear un nuevo arreglo a partir de otro, aplicando una función a cada elemento del arreglo original

//Recibir un arreglo, crear una copia y duplicar sus elementos.

const numeros =[1, 2, 3, 4, 5]

let duplicados = numeros.map(numero => {
  return numero * 2
});

console.log(numeros);
console.log(duplicados);
