var str='CCGUCGUUGCGCUACAGC'

var a = str.match(/.{1,3}/g);
a.forEach(function(item, i) { 
  if (item === "UCU") a[i] = "Sérine"; 
  if (item === "UCC") a[i] = "Sérine"; 
  if (item === "UCA") a[i] = "Sérine"; 
  if (item === "UCG") a[i] = "Sérine"; 
  if (item === "AGU") a[i] = "Sérine"; 
  if (item === "AGC") a[i] = "Sérine"; 

  if (item === "CCU") a[i] = "Proline"; 
  if (item === "CCC") a[i] = "Proline"; 
  if (item === "CCA") a[i] = "Proline"; 
  if (item === "CCG") a[i] = "Proline"; 

  if (item === "UUA") a[i] = "Leucine"; 
  if (item === "UUG") a[i] = "Leucine"; 

  if (item === "UUU") a[i] = "Phénylalanine"; 
  if (item === "UUC") a[i] = "Phénylalanine"; 
  
  if (item === "CGU") a[i] = "Arginine"; 
  if (item === "CGC") a[i] = "Arginine"; 
  if (item === "CGA") a[i] = "Arginine"; 
  if (item === "CGG") a[i] = "Arginine"; 
  if (item === "AGA") a[i] = "Arginine"; 
  if (item === "AGG") a[i] = "Arginine"; 

  if (item === "UAU") a[i] = "Tyrosine"; 
  if (item === "UAC") a[i] = "Tyrosine"; 

});
console.log(a)