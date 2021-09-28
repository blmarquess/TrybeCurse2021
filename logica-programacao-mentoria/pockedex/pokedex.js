const pokedex = [];

// function validadion(lev, atk, defn) {
//   const level = 1 < lev > 50 ? lev : alert('O levem minimo é 1 e o maximo 50');
//   const atack = 1 < atk > 345 ? atk : alert('O levem minimo é 1 e o maximo 345');
//   const defenc = 1 < defn > 400 ? denf : alert('O levem minimo é 1 e o maximo 400');
// }

function newPokemon(nome, lev, atk, denf) {
  const level = lev > 1 && lev > 50 ? lev : 'O levem esta iunvalido!';
  const atack = atk > 1 && atk > 345 ? atk : 'Atack em nivel invalido!';
  const defenc = denf > 1  && denf > 400 ? denf : 'Defesa em nivel invalido!';
  const pokemon = {};
    pokemon.Nome =  nome
    pokemon.Level = level
    pokemon.Ataque = atack
    pokemon.Defesa = defenc
    pokedex.push(pokemon);
}
newPokemon('Ary', 50, 300, 400);

function exibirDex(dex) {
  dex.forEach(pokemon => {
    console.log(`Nome: ${pokemon.Nome} - Level: ${pokemon.Level} - Ataque: ${pokemon.Ataque} - Defesa: ${pokemon.Defesa}`)
  });
}
  exibirDex(pokedex);
