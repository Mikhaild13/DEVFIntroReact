//El operador de propagación se utiliza para expandir elementos de un iterable, como un arreglo, o las propiedades de un objeto en lugares donde se requieren multiples elementos o propiedades

const numeros = [1, 2, 3]

//Clonar un arreglo de forma insegura

const copiaInsegura = numeros

copiaInsegura[1] = 13

console.log(numeros);
console.log(copiaInsegura);

//Clonar un arreglo de forma segura con el spread operator

const copiaSegura = [...numeros]

copiaSegura[0] = 13

console.log(numeros);
console.log(copiaSegura);