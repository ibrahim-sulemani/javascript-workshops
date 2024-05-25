// 3. Check temperature for comfort level ( comfort is between 20 and 25 )

let temperature = 21;

if (temperature >= 20 && temperature <= 25) {
  console.log("Temperature is comfortable");
} else {
  console.log("Temperature is not comfortable");
}

temperature >= 20 && temperature <= 25
  ? console.log("Temperature is comfortable")
  : console.log("Temperature is not comfortable");
