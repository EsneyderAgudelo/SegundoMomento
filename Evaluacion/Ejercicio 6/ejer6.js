const estudiante = {
    nombre: 'Juan Perez',
    edad: 20,
    direccion: {
        ciudad: 'Medellin',
        calle: 'Calle 10',
        numero: 101
    },
    notas: {
        matematicas: 4.5,
        ingles: 3.8,
        ciencias: 4.0
    }
};

const { nombre, direccion: { ciudad }, notas: { matematicas } } = estudiante;

console.log(nombre);     
console.log(ciudad); 
console.log(matematicas);