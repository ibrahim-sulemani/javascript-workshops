/*
5. Kreirajte varijabli firstName, lastName i fullName. 
Dokolku firstName i lastName ne se prazni i se podolgi od 3 karakteri
 spojte gi zaedno i prikazete poraka Hello, John Doe !
"+" Operatorot e zabranet
*/

let firstName = "John";
let lastName = "Doe   ";

if (firstName.trim().length >= 3 && lastName.trim().length >= 3) {
  let fullName = firstName.trim().concat(" ", lastName.trim());
  console.log("Hello, ".concat(fullName, "!"));
}
