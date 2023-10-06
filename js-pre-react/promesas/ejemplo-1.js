//Son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Se utilizan para manejar operaciones asíncronas.

const promesa = new Promise((resolve, reject) => {
  //Las promesas contienen dos metodos
  resolve()
  reject()

})

promesa.then((response) => {
  // codigo
  console.log(response);
}).catch((error) => {
  // codigo
  console.log(error);  
})