/* - Funkcija koja sto ke presmetuva vo odnos na kolku e smetkata 
i procent baksish sto sakame da ostavime. formula za presmetka: billAmount * (tipPercentage / 100); */

function presmetajSmetka(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

let billAmount = 200;
console.log(
  "Vo odnos na smetkata od " +
    billAmount +
    " den kalkuliran e baksis od " +
    presmetajSmetka(billAmount, 3) +
    " den"
);
