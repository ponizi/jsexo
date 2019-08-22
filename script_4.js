const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 :
// const result = entrepreneurs.filter(entrepreneur => entrepreneur.year > 1970 && entrepreneur.year < 1980);
// console.log(result)

/*
0: {first: "Elon", last: "Musk", year: 1971}
1: {first: "Marissa", last: "Mayer", year: 1975}
2: {first: "Larry", last: "Page", year: 1973}
3: {first: "Jack", last: "Dorsey", year: 1976}
4: {first: "Travis", last: "Kalanick", year: 1976}
5: {first: "Marc", last: "Andreessen", year: 1971}
length: 6
__proto__: Array(0)
*/

// Sors une array qui contient le prénom et le nom des entrepreneurs :

/*
var array = []
entrepreneurs.forEach(function(x) {
  array.push(x.first + " " + x.last)
})
console.log(array)
0: "Steve Jobs"
1: "Oprah Winfrey"
2: "Bill Gates"
3: "Sheryl Sandberg"
4: "Mark Zuckerberg"
5: "Beyonce Knowles"
6: "Jeff Bezos"
7: "Diane Hendricks"
8: "Elon Musk"
9: "Marissa Mayer"
10: "Walt Disney"
11: "Larry Page"
12: "Jack Dorsey"
13: "Evan Spiegel"
14: "Brian Chesky"
15: "Travis Kalanick"
16: "Marc Andreessen"
17: "Peter Thiel"
*/




// Quel âge aurait chaque inventeur aujourd'hui ? 
/*
var array = []
entrepreneurs.forEach(function(x) {
  array.push(2019 - x.year)
})

0: 64
1: 65
2: 64
3: 50
4: 35
5: 38
6: 55
7: 72
8: 48
9: 44
10: 118
11: 46
12: 43
13: 29
14: 38
15: 43
16: 48
17: 52
*/


// Trie les entrepreneurs par ordre alphabétique du nom de famille :

// console.log(entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1));

/*
0: {first: "Marc", last: "Andreessen", year: 1971}
1: {first: "Jeff", last: "Bezos", year: 1964}
2: {first: "Brian", last: "Chesky", year: 1981}
3: {first: "Walt", last: "Disney", year: 1901}
4: {first: "Jack", last: "Dorsey", year: 1976}
5: {first: "Bill", last: "Gates", year: 1955}
6: {first: "Diane", last: "Hendricks", year: 1947}
7: {first: "Steve", last: "Jobs", year: 1955}
8: {first: "Travis", last: "Kalanick", year: 1976}
9: {first: "Beyonce", last: "Knowles", year: 1981}
10: {first: "Marissa", last: "Mayer", year: 1975}
11: {first: "Elon", last: "Musk", year: 1971}
12: {first: "Larry", last: "Page", year: 1973}
13: {first: "Sheryl", last: "Sandberg", year: 1969}
14: {first: "Evan", last: "Spiegel", year: 1990}
15: {first: "Peter", last: "Thiel", year: 1967}
16: {first: "Oprah", last: "Winfrey", year: 1954}
17: {first: "Mark", last: "Zuckerberg", year: 1984}

*/