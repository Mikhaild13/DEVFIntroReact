let heladeriaAbierta = false

//Formas de usar promesas
//1. Crear las reglas de la promesa.
const traerHelado = new Promise((resolve, reject) => {
  // Lógica de la promesa
  if (heladeriaAbierta) {
    resolve('Te traje un helado')
  } else {
    reject('No te traje helado')
  }
})

//2. Recibir promesas como respuesta
traerHelado.then((response) => {
  console.log(response);
}).catch((error) => {
  // crear una pantalla de error
  console.error(error);
})


