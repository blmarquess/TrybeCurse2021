const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const properts in coolestTvShow) {
  console.log(properts);
}
// o exemplo a cima é o mesmo que utilizar o Object.keys 
console.log(Object.keys(coolestTvShow));

for (const properts in coolestTvShow) {
  console.log(coolestTvShow[properts]);
}
// o exemplo a cima é o mesmo que utilizar o Object.values
console.log(Object.values(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]