/*1.  Da se napise funkcija vo koja so pomos na switch ke proverime koja hrana ja saka najveke korisnikot,
 odgovorot dobivajte go od prompt
// BBQ  -- >  I am not a fan of BBQ
// Fruits -- >   Fruits are healthy
// Pizza -- >  My favourite dish
// Mexican food -- > Too spicy
// Any other word:   I have never heard of this food.
*/

function checkFood() {
  let food = prompt("What is your favourite food?");

  switch (food) {
    case "BBQ":
      console.log("I am not a fan of BBQ");
      break;
    case "Fruits":
      console.log("Fruits are healthy");
      break;
    case "Pizza":
      console.log("My favourite dish");
      break;
    case "Mexican food":
      console.log("Too spicy");
      break;
    default:
      console.log("I have never heard of this food.");
  }
}

checkFood();

/*2. Kreirajte funkcija koja sto so pomos na switch ke gi izvrsuva osnovnite matematicki operacii (+, - , *, /). 
Funkcijata treba da prima 3 paramtetri i resenieto treba da izgleda: 
calculator(5, 3, 'add'); // 8
calculator(5, 3, 'subtract'); //2

calculator(5, 3, 'multiply'); // 15

calculator(5, 3, 'divide')); // 1.666...
*/

function calculator(a, b, operation) {
  switch (operation) {
    case "add":
      console.log(a + b);
      break;
    case "subtract":
      console.log(a - b);
      break;
    case "multiply":
      console.log(a * b);
      break;
    case "divide":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operation!");
  }
}

let num1 = Number(prompt("Enter your first number: "));
let num2 = Number(prompt("Enter your second number: "));

let operation = prompt("Add operation (add, subtract, multiply, divide)");

calculator(num1, num2, operation);

/*
3. So pomos na for loop da se izminat site broevi od 1 do 45 za site broevi delivi so 3 vo konzola 
da se zapise brojot i do nego "brojot e deliv so 3", 
istoto i za delivi so 5 
a dokolku se delivi i so 3 i so 5 "Brojot e deliv i so 3 i so 5"
*/

for (i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " brojot e deliv i so 3 i so 5");
  } else if (i % 3 == 0) {
    console.log(i + " brojot e deliv so 3");
  } else if (i % 5 == 0) {
    console.log(i + " brojot e deliv so 5");
  }
}

/*
4. Da se napise arrow funkcija sto ke vrakja kolku pati edna bukva se povtoruva vo edna recenica 
*/

const countChar = (recenica, bukva) => {
  let count = 0;

  for (i = 0; i < recenica.length; i++) {
    if (bukva.toLowerCase() == recenica[i].toLowerCase()) {
      count++;
    }
  }

  return count;
};

let recenica = prompt("Vnesi recenica");
let bukva = prompt("Vnesi bukva");

console.log(
  "Bukvata " + bukva + " se pojavuva " + countChar(recenica, bukva) + " pati."
);

/*
5. So pomos na do while kreirajte loop sto ke ni otvara promt se dodeka ne vneseme pozitiven broj 
*/

let num;

do {
  num = Number(prompt("Vnesi broj"));
} while (num <= 0);

console.log("Brojot " + num + " e pozitiven");

/*
6. Funkcija koja sto ke ni presmetuva kolku samoglaski a kolku soglaski ima vo eden string. 
Stringot izminete go so for of.
*/

function presmetuvaj(recenica) {
  let soglaskiCounter = 0;
  let samoglaskiCounter = 0;

  let samoglaski = "aeiou";

  for (char of recenica) {
    if (samoglaski.includes(char.toLowerCase())) {
      samoglaskiCounter++;
    } else {
      soglaskiCounter++;
    }
  }

  console.log(
    `Recenicata ima ${soglaskiCounter} soglaski i ${samoglaskiCounter} samoglaski.`
  );
}

let recenicaStr = prompt("Vnesi recenica");
presmetuvaj(recenicaStr);
