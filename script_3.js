let a = prompt("Combien d'étages veux-tu ? ");
let array = [];
for(let count = 1; count <=a; count++){
  array.push(count);
  }
array.forEach(x => {
console.log(" ".repeat(a-x) + "#".repeat(x))
})