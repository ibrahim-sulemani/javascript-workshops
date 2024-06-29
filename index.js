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
  document.body.appendChild(createDiv(loggedInUser.username));

  var demoModal = bootstrap.Modal.getInstance(
    document.getElementById("loginModal")
  );

  demoModal.hide();
  demoModal.dispose();
}

function createDiv(username) {
  const divWelcome = document.createElement("div");
  divWelcome.classList.add("container", "mt-5");

  const h3 = document.createElement("h3");
  h3.textContent = `Welcome back, ${username}!`;

  const p = document.createElement("p");
  p.textContent = "This content is only visible to logged-in users.";

  const divContent = document.createElement("div");
  divContent.classList.add("border", "rounded", "p-3");

  const h4 = document.createElement("h4");
  h4.textContent = "Exclusive Content";

  const pcontent = document.createElement("p");
  pcontent.textContent =
    "Congratulations! You have exclusive access to this content.";

  const button = document.createElement("button");
  button.textContent = "Go somewhere";
  button.classList.add("btn", "btn-primary");

  divContent.appendChild(h4);
  divContent.appendChild(pcontent);
  divContent.appendChild(button);

  divWelcome.appendChild(h3);
  divWelcome.appendChild(p);
  divWelcome.appendChild(divContent);

  return divWelcome;
}
