/*
- Funkcija koja sto koga i da ja povikame ke ni dade random greeting od ponudenata niza: 
const greetings = ["Hello!", "Hi!", "Hey there!", "Greetings!", "Salutations!"];
*/

function greeting() {
    const greetings = ["Hello!", "Hi!", "Hey there!", "Greetings!", "Salutations!"];

    let index = Math.floor(Math.random() * greetings.length);

    return greetings[index];
}

console.log(greeting());