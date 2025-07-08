let num1Input = document.getElementById("num1-input");
let num2Input = document.getElementById("num2-input");
let num3Input = document.getElementById("num3-input");
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let multiplyButton = document.getElementById("multiply");
let divineButton = document.getElementById("divine");
let maxButton = document.getElementById("maximum");
let minButton = document.getElementById("minumim");
let avgButton = document.getElementById("average");

plusButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  console.log(num1 + num2 + num3);
});
minusButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  console.log(num1 - num2 - num3);
});
multiplyButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  console.log(num1 * num2 * num3);
});
divineButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  console.log(num1 / num2 / num3);
});

maxButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  // condition and or operator
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(num1);
    } else {
      console.log(num3);
    }
  } else {
    if (num2 > num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }
});

minButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  if (num1 > num2) {
    if (num2 > num3) {
      console.log(num3);
    } else {
      console.log(num2);
    }
  } else {
    if (num1 > num3) {
      console.log(num3);
    } else {
      console.log(num1);
    }
  }
});
avgButton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  console.log((num1 + num2 + num3) / 3);
});
