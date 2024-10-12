const productos = [
    { nombre: 'laptop', categoria: 'tecnologia', precio: 1000},
    { nombre: 'Smarphone', categoria: 'tecnologia', precio: 600},
    { nombre: 'Camisa', categoria: 'ropa', precio: 30},
    { nombre: 'Teclado', categoria: 'tecnologia', precio: 50},
    { nombre: 'Zapatillas', categoria: 'ropa', precio: 80},
];


const produTecnologia = productos.filter(producto => producto.categoria === 'tecnologia');
const produConDesc = produTecnologia.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
}));
const totalConDesc = produConDesc.reduce((total, producto) => total + producto.precio, 0);
console.log("Productos filtrados: ", produTecnologia);
console.log("Descuento a los productos filtrados: ", produConDesc);
console.log("Total con el descuento: ", totalConDesc);