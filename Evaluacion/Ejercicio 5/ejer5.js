const numeros = [5,8,12,15,2,4,18,21];
const numMulti = numeros.map(num => num * 2);
const numFilt = numeMulti.filter(num => num > 10);
const suma = numFilt.reduce((acc, num) => acc + num, 0);
console.log(suma);