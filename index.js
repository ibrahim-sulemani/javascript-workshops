/*
Workshop CRUD
1. Otvorete nov proekt na mockApi. Kreirajte tabela users.
 Potrebno e da se napravat funkcionalnosti za prikazuvanje, dodavanje, editiranje i brisenje na useri. 
 Dodadete bootstrap stil po vas izbor.
  Site funkcionalnosti neka bidat so inputi i dodavanje kako sto rabotevme vo cetvrtokot. 

2. Od kako ke go zavrsite prviot del dokolku ima vreme: 
Userite prikazuvajte gi vo tabela. Na sekoj user od desno neka ima "Edit" i "Delete".

*/


const apiUrl = "https://66ae1187b18f3614e3b6aa7e.mockapi.io/api/v1/users";


async function load() {
    const response = await fetch(apiUrl);
    const users = await response.json();

    document.getElementById("myDiv").innerHTML="";

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        document.getElementById("myDiv").innerHTML +=
            `<div class="col-md-3">
                    <div class="card m-2" style="width: 100%;">
              <img class="card-img-top" src="${user.avatar}" alt="Card image cap">
              <div class="card-body" id="userEdit-${user.id}">
                <h5 class="card-title">${user.name}</h5>
                <p class="card-text">${user.gender}</p>
                <p class="card-text">${user.jobTitle}</p>
                <p class="card-text">${user.jobType}</p>
                <p>${user.id}</p>
                <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
                <button class="btn btn-outline-success" onclick='editUser("${user.id}", "${user.name}", "${user.gender}", "${user.jobTitle}", "${user.jobType}")'>Edit</button>

              </div>
            </div>
            </div>`
    }
}

window.addEventListener("load", load);



document.getElementById("submit-create").addEventListener("click", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const jobType = document.getElementById("jobType").value;

    const user = {
        name: name,
        gender: gender,
        jobTitle: jobTitle,
        jobType: jobType
    }

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const result = await response.json();

    alert("User successfully added!");
    load();
});

async function deleteUser(userId) {
    const response = await fetch(`${apiUrl}/${userId}`, {
        method: 'DELETE',
    });

    const result = await response.json();

    alert("Resource deleted!");
    load();
}


async function updateUser(userId) {

    const updateName = document.getElementById("updateName").value;
    const updateGender = document.getElementById("updateGender").value;
    const updateJobTitle = document.getElementById("updateJobTitle").value;
    const updateJobType = document.getElementById("updateJobType").value;

    const data = {
        name: updateName,
        gender: updateGender,
        jobTitle: updateJobTitle,
        jobType: updateJobType
    }
    

    const response = await fetch(`${apiUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert("Resource updated!");
    load();
}


function editUser(userId, userName, userGender, userJobTitle, userJobType){
    const divElement = document.getElementById("userEdit-"+userId);

    divElement.innerHTML = `
            <label for="name">Name</label>
            <input type="text" class="form-control" id="updateName" value="${userName}">
            <label for="gender">Gender</label>
            <input type="text" class="form-control" id="updateGender" value="${userGender}">
            <label for="jobTitle">Job Title</label>
            <input type="text" class="form-control" id="updateJobTitle" value="${userJobTitle}">
            <label for="jobType">Job Type</label>
            <input type="text" class="form-control" id="updateJobType" value="${userJobType}">
            <button class="btn btn-outline-success mt-2" type="submit" onclick="updateUser(${userId})">Update user</button>
    `;
}