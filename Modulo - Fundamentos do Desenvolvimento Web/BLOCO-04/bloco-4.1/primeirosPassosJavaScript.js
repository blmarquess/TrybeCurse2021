const myName = "Bruno";
const birthCity = "Jacobina-BA";
let birthYear = 1992;

console.log(myName, birthCity, birthYear);

//  o JS tipa dinamicamentoe as variaveis e os tipos principais são 
// string, bolean, number, undefined
// quando declaramos uma variavel e não atribuimos valor a ela, o javascript interpreta que esta variavel é do tipo undefined
// se tivermos uma variavel numero que esta entre aspas o JS interpretara que ela é uma string por conta das aspas. 

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// se uma das constantes não fossem cafézinho  pão na chapa, o JavaScript retornaria como fale e acionaria o resultado do else

