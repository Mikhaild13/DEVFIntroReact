//En base a un operador ternario hacer que la funcion retorne 'Es par' o 'Es impar'

let esPar = numero => {
  return (numero % 2 == 0) ? 'Es par' : 'Es impar'
}

console.log(esPar(4));