// 1. Kreirajte kopce koe sto na klik ke ni go pokazuva datumot i vremeto.

function dateTime() {
  const d = new Date();
  document.getElementById("dateTime").textContent = d;
}

// 2. Kreirajte novo kopce koe sto ke ni kreira nov div so text "Div kreated with JS".
//  Koga ke se kreiraat 10 div-a prikazete alert "The limit is 10 Div's ". 

let countDivs = 0;

function createNewDiv() {

    if(countDivs == 10){
        alert("The limit is 10 Div's.");
        return
    }

    countDivs++;

   const divElement = document.createElement('div');
   divElement.textContent = "Div created with JS";
   
   const createdDivs = document.getElementById("createdDivs");
   createdDivs.appendChild(divElement);
}
/*
3. Vo html kreirajte eden dropdown so 4 random drzavi, pri sekoj nov izbor vo dropdownot vo nov paragraph prikazete 
koja drzava e odbana */

function showState() {
    const state = document.getElementById("states").value;

    document.getElementById("selectedState").textContent = `You selected ${state}`;
}


