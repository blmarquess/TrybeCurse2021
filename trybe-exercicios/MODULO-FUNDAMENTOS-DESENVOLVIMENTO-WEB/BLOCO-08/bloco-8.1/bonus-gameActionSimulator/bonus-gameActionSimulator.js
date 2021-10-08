const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dargonDanger = besta => {
  const dangerLimit = besta.strength;
  const dangerPower = Math.floor(Math.random() * (dangerLimit - 15) + 15);
  dragon.damage = dangerPower;
  return dangerPower;
};

dargonDanger(dragon);  //aleatore number entre 15 e limitePower


// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) 
// e o valor de strength * weaponDmg(dano máximo).

const warriorDanger = warrior => {
  const miniPower = warrior.strength * 2;
  const maxPower = warrior.strength * warrior.weaponDmg;
  const stagePower = Math.floor(Math.random() * (maxPower - miniPower) + miniPower);
  return warrior.damage = stagePower;
}
warriorDanger(warrior); // resultado 60 ¬¬

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano 
// recebe uma mensagem(Ex: "Não possui mana suficiente") e a mana gasta é 0.

const magicUsage = () =>{
  if (mage.mana > 15) {
    return Math.floor(Math.random() * ((mage.intelligence * 2) - (mage.intelligence)) + mage.intelligence);
  }
  return `Não possui mana suficiente`;
}

magicUsage();
console.log(magicUsage())

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const gameActions = {
  // Crie as HOFs neste objeto.
};