
//If, else if, else:

/*
Checking Age for Different Ticket Prices 
- Child ticket: $5 (below 12 years)
- "Teen ticket: $7" (below 18 years)
- "Senior ticket: $10 (between 18 and 60)
- "Adult ticket: $10" (over 60years)
*/

let age = 15;

if (age < 12) {
    console.log("Child ticket: $5");
} else if (age < 18) {
    console.log("Teen ticket: $7");
} else if (age < 60) {
    console.log("Senior ticket: $10");
} else {
    console.log("Adult ticket: $10");
}
