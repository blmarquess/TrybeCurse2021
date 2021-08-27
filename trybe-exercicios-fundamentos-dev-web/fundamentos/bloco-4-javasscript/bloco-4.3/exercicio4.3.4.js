let n = 5;
let lista = "";
for ( let index = 0; index < n; index += 1){
lista = "";
for(let thirdIndex =0 ; thirdIndex < (n-index) ; thirdIndex+=1){
lista = lista + " ";
}
for(let secondIndex = 0; secondIndex <= index; secondIndex += 1){
lista += "* ";
}
console.log(lista);
} 