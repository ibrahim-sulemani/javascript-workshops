/*
2. Kreirajte nova varijabla za url na link. 
Dokolku linkot zapocnuva so https prikazete poraka  "The URL is secure. ", 
dokolku pocnuva so http "Warning: The URL is not secure.". 
Se ostanato "Invalid url". 
*/

let url = "https://www.google.com";

if (url.startsWith("https")) {
  console.log("The URL is secure.");
} else if (url.startsWith("http")) {
  console.log("Warning: The URL is not secure.");
} else {
  console.log("Invalid url");
}
