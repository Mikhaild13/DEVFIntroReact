//Clonar un objeto y modificar sus propiedades

const persona = {nombre: 'Fiorella', edad: 24}

const personaModificada = {...persona, altura: 1.60}

console.log(personaModificada);