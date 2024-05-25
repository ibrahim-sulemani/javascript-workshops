/*
3. Napravete proverka za filename so koja ekstenzija zavrsuva: .txt , .pdf, .jpg, .css.
 Soodvetna poraka za sekoja od niv.
 Site ostanati - Invalid file name. 
*/

let filename = "test.txt";

if (filename.endsWith(".txt")) {
  console.log("It is a valid text file name");
} else if (filename.endsWith(".pdf")) {
  console.log("It is a valid pdf file name");
} else if (filename.endsWith(".jpg")) {
  console.log("It is a valid jpg file name");
} else if (filename.endsWith(".css")) {
  console.log("It is a valid css file name");
} else {
  console.log("Invalid file name");
}
