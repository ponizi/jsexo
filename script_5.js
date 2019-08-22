const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



/*
Est-ce que tous les livres ont été au moins empruntés une fois ?
const result = books.filter(book => book.rented <= 1);
console.log(result)

Oui
*/


// Quel est livre le plus emprunté ?

/*
var x = books.reduce((acc, i)=>(i.rented > acc.rented ? i : acc))

console.log(x)
id: 873495
rented: 67
title: "Orgueil & Préjugés"
*/

// Quel est le livre le moins emprunté ?

/*
var x = books.reduce((acc, i)=>(i.rented < acc.rented ? i : acc))

console.log(x)
id: 8376365
rented: 15
title: "Dans les forêts de Sibérie"
*/
// Trouve le livre avec l'ID: 873495 ;

/*
const result = books.filter(book => book.id === 873495);
console.log(result)

id: 873495
rented: 67
title: "Orgueil & Préjugés"

*/

// Supprime le livre avec l'ID: 133712 ;


var array = []
books.forEach(function(x) {
 if (x.id !== 133712) {
  array.push(x);}
})

/*
console.log(array)

0: {title: "A la recherche du temps,perdu", id: 237634, rented: 28}
1: {title: "Orgueil & Préjugés", id: 873495, rented: 67}
2: {title: "Les frères Karamazov", id: 450911, rented: 55}
3: {title: "Dans les forêts de Sibérie", id: 8376365, rented: 15}
4: {title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45}
5: {title: "Et on tuera tous les affreux", id: 67565, rented: 36}
6: {title: "Le meilleur des mondes", id: 88847, rented: 58}
7: {title: "La disparition", id: 364445, rented: 33}
8: {title: "La lune seule le sait", id: 63541, rented: 43}
9: {title: "Voyage au centre de la Terre", id: 4656388, rented: 38}
10: {title: "Guerre et Paix", id: 748147, rented: 19}

*/


// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

console.log(array.sort((a, b) => (a.title > b.title) ? 1 : -1));

/*
0: {title: "A la recherche du temps,perdu", id: 237634, rented: 28}
1: {title: "Dans les forêts de Sibérie", id: 8376365, rented: 15}
2: {title: "Et on tuera tous les affreux", id: 67565, rented: 36}
3: {title: "Guerre et Paix", id: 748147, rented: 19}
4: {title: "La disparition", id: 364445, rented: 33}
5: {title: "La lune seule le sait", id: 63541, rented: 43}
6: {title: "Le meilleur des mondes", id: 88847, rented: 58}
7: {title: "Les frères Karamazov", id: 450911, rented: 55}
8: {title: "Orgueil & Préjugés", id: 873495, rented: 67}
9: {title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45}
10: {title: "Voyage au centre de la Terre", id: 4656388, rented: 38}
*/

