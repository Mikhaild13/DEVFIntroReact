//El operador rest... se utiliza para recoger 'n' argumentos. A estos argumentos se les conoce como 'argumentos rest'

const sumaNumeros = (...numeros) => {
  let suma = 0;

  for (const numero of numeros) {

    suma += numero
  }

  return suma
}

console.log(sumaNumeros(1, 2, 3 ,4, 5));