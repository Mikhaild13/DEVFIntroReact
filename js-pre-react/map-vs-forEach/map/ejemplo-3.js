//Extraer las longitudes de las palabras de un arreglo

const palabras = ['Manzana', 'Llanta' , 'Tarjeta', 'Cámara']

let longitudes = palabras.map(palabra => {
  return palabra.length
});

console.log(longitudes);