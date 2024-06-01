// - Funkcija koja sto ke presmetuva godini na edna licnost.

function presmetajGodini(currentYear, birthYear) {
  return currentYear - birthYear;
}

let godina = 1990;

console.log(
  "Licnosta rodena vo " +
    godina +
    ", ima " +
    presmetajGodini(2024, godina) +
    " godini."
);
