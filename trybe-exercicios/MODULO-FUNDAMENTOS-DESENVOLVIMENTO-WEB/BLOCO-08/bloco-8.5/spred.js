// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

const randomNumbers2 = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers2)); // 800
console.log(Math.min(...randomNumbers2)); // 5
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer);
// { id: 101,
//   name: 'Alysson',
//   age: 25,
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer'}
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'ova', 'limao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco', 'sorvete', 'sandwish'];

const fruitSalad = (fruit, additional) => fSalad = [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
