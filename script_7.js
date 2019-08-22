let a = prompt("Yo jsuis le chatbot: ");

var lastChar = a.slice(-1);
if(lastChar == '?')
  console.log("Ouais Ouais...")
else if(a.toUpperCase() === a)
  console.log("Pwa, calme-toi...")

else if(a.includes("fortnite"))
  console.log("on s' fait une partie soum-soum ?")


else if (a === "") 
  console.log("t'es en PLS ?")

else 
  console.log("Balek")


