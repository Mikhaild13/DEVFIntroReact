//2. Modificando el arreglo original

const numeros = [1, 2, 3, 4, 5]

//Cada for Each, en la función que pide como parámetro, a su vez, esa función pide 3 parámetros: elemento, indice y arreglo completo.
// arreglo.forEach((elemento, indice, arregloCompleto) => {
//   console.log(`${elemento}.- ${numero} === ${arregloCompleto}`);
// });

numeros.forEach((numero, indice, arregloCompleto) => {
  arregloCompleto[indice] = numero * 2;
});

console.log(numeros);
