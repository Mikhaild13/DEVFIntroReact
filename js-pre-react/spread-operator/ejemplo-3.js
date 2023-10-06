//Copiar de forma segura las propiedades de un objeto a otro

const gato = { nombre: 'Mishita', edad: 3}

const gatoCopia ={...gato}

gatoCopia.edad = 4

console.log(gato);
console.log(gatoCopia);