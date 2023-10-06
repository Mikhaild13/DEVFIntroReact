//Concatenar arreglos
//El spread operator también puede servir para combinar varios arreglos en uno.

const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]

const arregloConcatenado = [...arreglo1,...arreglo2]

console.log(arregloConcatenado);