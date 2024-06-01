//  Funkcija koja sto ke presmetuva perimetar na pravoagolnik.

function presmetajPerimetar(a, b) {
  return 2 * a + 2 * b;
}

let a = 5;
let b = 3;

console.log(
  "Perimetar na pravoagolnik so dolzina " +
    a +
    " i visina " +
    b +
    " e ednakvo na " +
    presmetajPerimetar(a, b)
);
