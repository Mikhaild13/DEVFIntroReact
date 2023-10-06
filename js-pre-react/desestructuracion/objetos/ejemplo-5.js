// Desestructuración de objetos como parámetros de funciones

function imprimirInfo({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona = {
  nombre: "Fiorella",
  edad: 24,
  ciudad: "Chiclayo",
};

imprimirInfo(persona);
