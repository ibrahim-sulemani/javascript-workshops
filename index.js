/*
- Kreirajte arrow funkcija koja sto ke ni go vrakja pogolemiot od 2 broja 
(dokolku se isti ne treba dodatna proverka) 
resenieto vo funkcijata treba da go dobiete so ternary operator. 
*/

const proverka = (a, b) => {
  let c = a > b ? a : b;
  return c;
};

console.log(proverka(5, 3));
console.log(proverka(7, 10));
console.log(proverka(9, 9));
