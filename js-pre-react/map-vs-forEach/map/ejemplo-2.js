//Convertir un arreglo de nombres en un arreglo de saludos.

const nombres = ['Fiorella', 'Mikhaild', 'Peckychana', 'Mishita <3']

let saludos = nombres.map(nombre => {
  return `Hola ${nombre}`
});

console.log(saludos);