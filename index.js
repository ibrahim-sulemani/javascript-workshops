/*
1. Da kreirame casovniko koj sto ke ni go prikazuva momentalnoto vreme postojano.
   Nacin na koj da gi zemete "hours, minutes, seconds":

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
   
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    Casovnikot ke go prikazuvame vo  div vo HTML.

2. Kreirajte event listener koj sto pri klik na button ke ni go zapira i pusta casovnikot. 

3. Kreirajte input i button koj sto na klik ne ni ja dodava vrednosta vo localStorage i
   ke ja prikazuvate istata vo paragraf (vrednosta zemena od localStorage)

4. Kreirajte button koj sto ke ni ja menuva temata vo dark i light. 
   Na klik na kopce da se menuva pozadinata i kontentot soodvetno 
   (bg-light & text-dark ili bg-dark & text-white). 
   Vrednosta sto e odbrana cuvajte ja postojano vo localStorage 
   taka sto koga i da se vratime da ja imame poslednata sto sme ja odbrale. 

5. Kreirajte dropdown so opcii za font-size na sajtot. 
   Dodade 5 razlicni font-sizes i vo odnos na odbraniot da ni se menuva fontot na celiot sajt. 
   Vo localStorage cuvajte ja izbranata vrednost taka sto poslednata odbrana ke stoi sekogas za user-ot. 

6. Kreirajte dropdown za preferiran jazik na korisnikot. 
   Vrednosta sto ke ja odbere od dropdown-ot zapisete ja vo cookies i cuvajte ja 7 dena. 
   Vrednosta sto ja odbral korisnikot prikazete ja vo paragraf.
*/

function timer() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").textContent =
    hours + ":" + minutes + ":" + seconds;
}

let interval = setInterval(timer, 1000);
let timerStarted = true;
const startStop = document.getElementById("startStop");

startStop.addEventListener("click", startStopTimer);

function startStopTimer() {
  if (timerStarted) {
    timerStarted = false;
    startStop.textContent = "Start";
    clearInterval(interval);
  } else {
    timerStarted = true;
    startStop.textContent = "Stop";
    interval = setInterval(timer, 1000);
  }
}

const buttonValue = document.getElementById("buttonValue");
buttonValue.addEventListener("click", saveinLocalStorage);

function saveinLocalStorage() {
  let textValue = document.getElementById("textExample").value;
  if (textValue) {
    localStorage.setItem("text", textValue);
  }

  showInParagraph();
}

function showInParagraph() {
  const textValue = localStorage.getItem("text");

  if (textValue) {
    document.getElementById("displayText").textContent = textValue;
  }
}

showInParagraph();

const buttonThemeOption = document.getElementById("buttonTheme");
buttonThemeOption.addEventListener("click", buttonTheme);

let theme = localStorage.getItem("theme");

if (!theme) {
  theme = "light";
  buttonThemeOption.textContent = "Dark Theme";
} else {
  buttonThemeOption.textContent = "Light Theme";
}

setTheme(theme);

function buttonTheme() {
  if (theme == "light") {
    theme = "dark";
    buttonThemeOption.textContent = "Light Theme";
  } else {
    theme = "light";
    buttonThemeOption.textContent = "Dark Theme";
  }
  localStorage.setItem("theme", theme);
  setTheme(theme);
}

function setTheme(theme) {
  if (theme == "light") {
    document.body.classList.add("bg-light", "text-dark");
    document.body.classList.remove("bg-dark", "text-white");
  } else {
    document.body.classList.remove("bg-light", "text-dark");
    document.body.classList.add("bg-dark", "text-white");
  }
}

const fontSizeElement = document.getElementById("fontSize");

let fontSize = localStorage.getItem("FontSize");

if (!fontSize) {
  fontSize = fontSizeElement.value;
} else {
  fontSizeElement.value = fontSize;
}

setFontSize(fontSize);

function setFontSize(fontSize) {
  document.body.classList.remove("fs-1", "fs-2", "fs-3", "fs-4", "fs-5");
  document.body.classList.add(fontSize);
}

fontSizeElement.addEventListener("change", changeFontSize);

function changeFontSize() {
  localStorage.setItem("FontSize", fontSizeElement.value);
  fontSize = fontSizeElement.value;
  setFontSize(fontSize);
}

const languageElement = document.getElementById("languageChoice");
const languageParagraph = document.getElementById("languagePar");

let cookies = document.cookie.split(";");
let languageString = cookies.find((cookie) =>
  cookie.trim().startsWith("language=")
);

if (languageString) {
  languageElement.value = languageString.split("=")[1];
  languageParagraph.textContent = languageString.split("=")[1];
}

languageElement.addEventListener("change", setLanguage);

function setLanguage() {
  let date = new Date();
  date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

  document.cookie = `language=${languageElement.value}; expires=${date.toUTCString()} ; path=/ `;

  languageParagraph.textContent = languageElement.value;
}
