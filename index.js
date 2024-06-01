// -  Definirajte nekoj random broj od 1 do 100, vo consola da se iskuca dali toj broj e paren ili neparen.

function isEven(a) {
  if (a % 2 == 0) {
    return "paren";
  } else {
    return "neparen";
  }
}

let number = Math.floor(Math.random() * 100) + 1;

console.log(number + " e " + isEven(number));
