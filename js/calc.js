const buttonCalc = document.getElementById("buttonCalc");

buttonCalc.addEventListener("click", calc);

function calc() {
  var quantity = parseFloat(document.getElementById("quantity").value);
  var price = parseFloat(document.getElementById("price").value);
  var operator = document.getElementById("operator").value;
  console.log(
    "quantity: " + quantity + ", price:" + price + ", operator:" + operator
  );
  var total = 0;
  switch (operator) {
    case "*":
      total = quantity * price;
      break;
    case "+":
      total = quantity + price;
      break;
    case "-":
      total = quantity - price;
      break;
    case "/":
      if (price !== 0) {
        total = quantity / price;
      } else {
        console.log("no se puede dividir");
      }
      break;
    default:
      break;
  }

  document.getElementById("result").innerHTML = "El total es: " + total;
}
