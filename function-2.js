function findSum(a, b) {
  return a + b;
}
let num1input = document.getElementById("num1");
let num2input = document.getElementById("num2");
let buttonPlus = document.getElementById("plusBtn");
let buttonMinus = document.getElementById("minusBtn");
let answerP = document.getElementById("answer");

function buttonClick() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  console.log(num1);

  let sum = num1 + num2;
  answerP.innerText = sum;
}
buttonPlus.addEventListener("click", buttonClick);

function minus() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let minus = num1 - num2;
  answerP.innerText = minus;
}
buttonMinus.addEventListener("click", minus);
