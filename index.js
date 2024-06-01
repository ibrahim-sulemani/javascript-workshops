// - Funkcija koja sto ke ni vrakja kolku cifren e eden broj (dolzinata na brojot).

function numberLength(number) {
  return Number(number).toString().length;
}

let num = 45132565;
console.log("Brojot " + num + " e " + numberLength(num) + " cifren.");
