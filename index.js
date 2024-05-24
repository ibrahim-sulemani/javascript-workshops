
/*
 Simple Login System ( if the credentials match) 
- username: admin, pass: adminpass - Welcome, admin!
- username: user123 , pass: password123 - Welcome, user123!
- missmatch -  Invalid username or password.
*/

let username = "admin";
let password = "adminpass";

if (username == "admin" && password == "adminpass") {
    console.log("Welcome, admin!");
} else if (username == "user123" && password == "password123") {
    console.log("Welcome, user123!");
} else {
    console.log("Invalid username or password.");
}
