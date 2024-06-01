// - Funkcija koja sto ke ni pravi validacija na eden password dali e pogolem od 8 karakteri
// i da ne sodrzi prazni mesta vo sebe

function validPassword(password) {
  if (password.length <= 8) {
    return false;
  }

  if (password.includes(" ")) {
    return false;
  }

  return true;
}

let pass = "asdf";
console.log("Validacija dali '" + pass + "' e validen: " + validPassword(pass));

pass = "asdf3324AAAlk";
console.log("Validacija dali '" + pass + "' e validen: " + validPassword(pass));

pass = "asdf   2323";
console.log("Validacija dali '" + pass + "' e validen: " + validPassword(pass));

pass = "   ";
console.log("Validacija dali '" + pass + "' e validen: " + validPassword(pass));
