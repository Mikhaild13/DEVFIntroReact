// Desestructuración anidada de objetos

const persona = {
  nombre: "Fiorella",
  edad: 24,
  ciudad: "Chiclayo",
  direccion: {
    mz: "T",
    lote: 13,
  },
};

const {
  nombres,
  direccion: { mz: manzana, lote },
} = persona;

console.log(manzana, lote);
