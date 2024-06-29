/* 
Kreirajte eden simple login page kade sto na pocetok ke imame samo naslov i kopce "Login" na koe sto
 ke se otvara bootstrap-modal so forma username i password. 

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];
Napravete validacija za username i password i dokolku se tocni istite ke prikazeme:
- Ke gi skrieme prethodniot naslov i kompceto 
- Ke prikazeme poraka Welcome back, user1!

Vo prilog i slikite kako odprilika da izgleda, slobodno dodavajte si vasi stilovi. 

Bonus: Dokolku zavrsite i imate dovolno vreme celiot content sto e prikazan posle uspesno logiranje dodajte 
go samo preku JS. */

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const loggedInUser = users.find(
    (user) => user.username == username.value && user.password == password.value
  );

  if (typeof loggedInUser == "undefined") {
    const error = document.getElementById("error");
    error.textContent = "Invalid username or password!";
    error.style.color = "red";
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("usernameSpan").textContent = loggedInUser.username;
  document.getElementById("loggedInContent").classList.remove("d-none");


  var demoModal = bootstrap.Modal.getInstance(
    document.getElementById("loginModal")
  );

  demoModal.hide();
  demoModal.dispose();
}
