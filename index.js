/*
Prvicno imate index.html i style.css fajlovi, za vednas za zapocnete so js. 

- Funkcija za dodavanje da items vo ul listata
- Funkcija brisenje na item od listata
- Funkcija za editiranje da item (da ni se otvori input pole direkno na poleto za da mozeme da go editirame) 

Zadacata treba da se resi na 2 nacina
1. So pomos na metodata findIndex da go najdete soodvetniot index na elementot i spored nego na koristite splice. 
2. Pri prikazuvanje na elementite vo innerHTML prikazete gi so forEach. 
Pri koristenje na forEach metodata ima opcionalen parametar za index (vidi dokumentacija za forEach). 
Pa taka vednas pri izminuvanje na nizata mozeme da go pratime ideksot na sekoj element (kako id na element).
*/

let itemsArray = [];

function addItem() {
    const itemElement = document.getElementById("newItem");

    itemsArray.push(itemElement.value);

    itemElement.value = "";

    displayElements(itemsArray);
}

function displayElements(items) {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    
    for (item of items){
        const itemElement = document.createElement("li");
        itemElement.innerHTML = `
            ${item}
            <button class="edit-btn" onclick = "editItem('${item}')">Edit</button> 
            <button class="delete-btn" onclick = "deleteItem('${item}')">Delete</button>
        `;

        itemList.appendChild(itemElement);
    }
}

function deleteItem(item) {
    index = itemsArray.findIndex(element => element == item);

    itemsArray.splice(index, 1);

    displayElements(itemsArray);
}

function editItem(item) {
    index = itemsArray.findIndex(element => element == item);

    const itemList = document.getElementById("itemList");
    const itemElement = itemList.getElementsByTagName('li')[index];

    itemElement.innerHTML = `
            <input type="text" value="${item}" id="editItemInput">
            <button class="edit-btn" onclick = "saveItem(${index}, '${item}')">Save</button> 
        `;
}

function saveItem(index, item) {
    const newValue = document.getElementById("editItemInput").value;

    itemsArray.splice(index, 1, newValue);
    displayElements(itemsArray);

}

