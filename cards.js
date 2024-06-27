
/*
4. Dobijte go izgledot na kartickite samo preku JS. Kreirajte si poseben html i js file,
 povrzete bootstrap i so create, append, classList.add(), setAttribute
 dobijte go izgledot od slikata sto e prikacena.
 */


const parentElement = document.createElement("div");
parentElement.classList.add("mt-5", "d-flex", "gap-5", "justify-content-center");

document.body.appendChild(parentElement);

const cardsContent = [
    {
        image: "./Images/photo1.jpg",
        title: "Card title 1",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Go somewhere 1"
    },
    {
        image: "./Images/photo2.jpg",
        title: "Card title 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Go somewhere 2"
    },
    {
        image: "./Images/photo3.jpeg",
        title: "Card title 3",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonText: "Go somewhere 3"
    }
];

for(card of cardsContent){
    const cardElement = createCard(card.image, card.title, card.text, card.buttonText);

    parentElement.appendChild(cardElement);
}



function createCard(image, title, text, buttonText){

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.width = "18rem";

    const imgElement = document.createElement("img");
    imgElement.classList.add("card-img-top");
    imgElement.src = image;

    cardElement.appendChild(imgElement);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = text;
    cardBody.appendChild(cardText);
    
    const cardButton = document.createElement("button");
    cardButton.classList.add("btn", "btn-primary");
    cardButton.textContent = buttonText;
    cardButton.setAttribute("type", "button");
    cardBody.appendChild(cardButton);


    cardElement.appendChild(cardBody);



    return cardElement;
}
