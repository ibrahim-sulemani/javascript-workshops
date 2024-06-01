// -  Vo edna varijabla stavete go imeto na vasiot omilen bend/peac zaedno so omilenata pesna.
// Bez da napravite posebna proverka za mala i golema bukva  proverete kolku pati se povtoruva bukvata "a" vo stringot

function count(str) {
  let str1 = str.replaceAll("A", "a");
  return str1.split("a").length - 1;
}

let bendPesna = "Dua Lipa - IDGAF";
console.log("'" + bendPesna + "' ima " + count(bendPesna) + " 'a' karakteri.");
