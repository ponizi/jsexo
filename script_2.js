let a = prompt("De quel nombre veux tu calculer la factorielle ?: ");
let array = [];
for(let count = 1; count <=a; count++){
array.push(count);
}
result = array.reduce( (a,b) => a * b );
console.log(result)
