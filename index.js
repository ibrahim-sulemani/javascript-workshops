/*
Kreirajte funckija koja sto ke ni prikazuva karticki kako produkti od dadenata niza: 


    const products = [
        { name: "Apple", price: 1 },
        { name: "Banana", price: 0.5 },
        { name: "Orange", price: 0.8 },
        { name: "Grapes", price: 2 },
    ];

Sekoja od kartickite treba da ima "Add to Cart" koe sto ke ni gi dodava produktite vo kosnicka.
Kosnickata da ni se pokazuva desno gore samo dokolku ima produkti vo nea.
Dodadete opcija za remove item od kosnickata.
Nizata za kosnickata cuvajte ja vo LocalStorage za da ne gi izgubi user-ot promenite dokolku
 napravi refresh/ izleze od stranata.
*/

const products = [
  { name: "Apple", price: 1 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 0.8 },
  { name: "Grapes", price: 2 },
];

function showProducts() {
  let productsString = "";

  for (product of products) {
    productsString += createProduct(product);
  }

  document.getElementById("products").innerHTML = productsString;
}

function createProduct(product) {
  return `<div class="p-5 border">
    <h4>${product.name}</h4>
    <h5>$${product.price}</h5>
    <button class="btn btn-primary" onclick="addToCard('${product.name}')">Add to card</button>
    </div>`;
}

showProducts();

let cards = [];

let cardItemsFromStorage = localStorage.getItem("cards");

if(cardItemsFromStorage){
  cards = JSON.parse(cardItemsFromStorage);
}

showCards();

function addToCard(productName) {
  cards.push(productName);
  localStorage.setItem("cards", JSON.stringify(cards));
  showCards();
}

function showCards() {
  let cardsString = "";
  for (cardItem of cards) {
    cardsString += createCardItem(cardItem);
  }
  document.getElementById("cards").innerHTML = cardsString;

  if(cards.length > 0) {
    document.getElementById("cardsParent").classList.remove("d-none");
  } else {
    document.getElementById("cardsParent").classList.add("d-none");
  }
}

function createCardItem(item) {
  return `<div class="d-flex justify-content-between border p-3">
                <h5>${item}</h5>
                <button class="btn btn-danger" onclick="removeFromCard('${item}')">Remove</button>
             </div>`;
}


function removeFromCard(item) {

  let index = cards.findIndex((cardItem) => cardItem == item);

  if (index > -1) {
    cards.splice(index, 1);
  }

  localStorage.setItem("cards", JSON.stringify(cards));

  showCards();
}
