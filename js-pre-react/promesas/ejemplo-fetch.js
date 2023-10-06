//La funcion fetch se utiliza para realizar solicitudes de ... y recuperar o modificar recursos alojados en una url

//Nos devuelve un objeto de tipo 'Promise'

fetch ('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.error('Error: ', error);
})