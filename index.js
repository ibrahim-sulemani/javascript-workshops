// - Funkcija koja sto presmetuva denovi vo sekundi.

function presmetajVoSekundi(numDays) {
  return numDays * 24 * 60 * 60;
}

let numDays = 3;

console.log(
  numDays + " denovi vo sekundi e " + presmetajVoSekundi(numDays) + "s"
);
