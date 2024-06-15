// 1. Kreirajte niza so 20 radnom broevi. Prvicno zemete gi site parni broevi od nizata i
//  potoa sekoj od niv stavete go na kvadrat.


let randomNumbers = [];

for(i=0; i < 20; i++) {
    let number = Math.floor(Math.random()*100)+1;
    randomNumbers.push(number);
}
console.log(randomNumbers);

let parniBroevi = randomNumbers.filter(number => number % 2 == 0);

console.log(parniBroevi);

let kvadratParni = parniBroevi.map(number => number * number);


console.log(kvadratParni);




// 2. Ke kreirame ednostavna To-Do Lista. Na pocetok ke imame edna prazna niza todoList koja sto pri 
//  povika na addTask funkcija kako parametar ke go prakjame taskot i ke go dodavame vo nizata. 
//  Ista funkcija treba da imame i za remove task. 
//  Funkcija  viewTasks koja sto ke prima parametri od kade do kade sakame da gi gledame taskovite (start, end). 
// I posledno ke imame edna funkcija  getSummary koja sto ke ni gi prikazuva site taskovi oddeleni so zapirka.  



let todoList = [];

function addTask(task) {
    todoList.push(task);
}


function removeTask() {
    return todoList.shift();
}

function viewTasks(start, end) {
 return todoList.slice(start, end);
}

function getSummary(){
    return todoList.join(",");
}


console.log(todoList);

addTask("go to gym")
addTask("go to market")
addTask("go to swimming pool")
addTask("go to cinema")
addTask("drink coffee")

console.log(todoList);

console.log(getSummary());

console.log(viewTasks(1, 3));

console.log(removeTask());
console.log(todoList);

console.log(removeTask());
console.log(todoList);

console.log(viewTasks(1, 3));

console.log(getSummary());



// 3.Od dadenata niza da se zemat knigite na koj sto id e pomalo od 10, 
// potoa vo konzola isprintajte ja sekoja od tie knigi i ispecatete do nejze deka taa e od prvite 10.

// let library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 25 },
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 42 },
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 4 },
//     { author: 'Narayana Murthy', title: 'A Better India: A Better World', libraryID: 2 },
//     { author: 'A Passage to India', title: 'E.M. Foster', libraryID: 24 }
// ];


let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 25 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 42 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 4 },
    { author: 'Narayana Murthy', title: 'A Better India: A Better World', libraryID: 2 },
    { author: 'A Passage to India', title: 'E.M. Foster', libraryID: 24 }
];

console.log(library);

let library10 = library.filter(book => book.libraryID < 10);
console.log(library10);

library10.forEach(book => console.log(`Knigata so naslov "${book.title}" e od prvite 10.`));



// 4.  Kreirajte prazna niza shopping list, potrebno e da se napravat 2 oddelni funkcii, 
// ednata e add item koja sto ke ni dodava produkti vo nizata
//  (na sekoe povikuvanje na funkcijata vo string da dodavame po eden produkt) 
//  i uste edna funkcija koja sto ke ni printa sto imame vo kosnickata (cela lista), 
//  dokolku e prazna da isprintame Your shopping list is empty.





let shoppingList = [];

function addItem(product) {
    shoppingList.push(product);
}

function print() {
    if(shoppingList.length == 0) {
        console.log("Your shopping list is empty");
    } else {
        shoppingList.forEach(product => console.log(product));
    }
}

print();

addItem("chocolate")
addItem("milk")
addItem("yogurt")
addItem("peanuts")
addItem("avocado")

print();
console.log(shoppingList);



5. // Od dadenata niza od objekti isfiltirjate gi produktitie so kategorija "Electronics", 
// potoa sortirajte gi po cena od najgolema do najmala
// vo krajnoto resenie treba da dobiete niza samo od iminjata na produktite.
// console.log(filteredAndSortedProducts);
//   ['Laptop', 'Headphones', 'Smartphone']


// const products = [
//     { name: 'Laptop', price: 999.99, category: 'Electronics' },
//     { name: 'Smartphone', price: 8.99, category: 'Electronics' },
//     { name: 'Bike', price: 399.99, category: 'Sports & Outdoors' },
//     { name: 'Headphones', price: 79.99, category: 'Electronics' },
//     { name: 'Running Shoes', price: 129.99, category: 'Sports & Outdoors' },
//   ];



  
const products = [
    { name: 'Laptop', price: 999.99, category: 'Electronics' },
    { name: 'Smartphone', price: 8.99, category: 'Electronics' },
    { name: 'Bike', price: 399.99, category: 'Sports & Outdoors' },
    { name: 'Headphones', price: 79.99, category: 'Electronics' },
    { name: 'Running Shoes', price: 129.99, category: 'Sports & Outdoors' },
  ];


  let filteredProducts = products.filter(product => product.category == 'Electronics');

  let filteredAndSortedProducts = filteredProducts.sort((a, b) => a.price - b.price);

  let filteredAndSortedProductsReversed = filteredAndSortedProducts.reverse();

  console.log(filteredAndSortedProductsReversed);

  let nameProducts = filteredAndSortedProductsReversed.map(product => product.name);

  console.log(nameProducts);
