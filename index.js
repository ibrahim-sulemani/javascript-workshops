// 4. Determining Shipping Cost Based on Order Amount (if the amout is above 100 shipping is free, if not it's $10)

let orderAmount = 700;

if (orderAmount > 100) {
  console.log("Free shipping");
} else {
  console.log("10$ shipping");
}

orderAmount > 100 ? console.log("Free shipping") : console.log("10$ shipping");
