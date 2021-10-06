const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer.lastName = 'Faria';
// console.log(customer);

customer.city = 'Jacobina';
// console.log(customer);
// console.table(customer);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
}
customer2['city'] = 'Jacobina'
// console.log(customer2);
customer2['lastName'] = 'Silva'
// console.table(customer2);

// Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como 
// a naturalidade, a data de nascimento e o estado civil.
// Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.

const customer3 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer3[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer3.firstName} ${customer3.lastName}`;
customer3[newKey] = fullName;
console.log(customer3);
