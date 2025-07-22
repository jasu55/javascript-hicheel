function findBirthYear(age) {
  let birthyear = 2025 - age;
  console.log(birthyear);
}
findBirthYear(22);

function sayGreeting(name) {
  let greeting = "Sain bain yy " + name;
  console.log(greeting);
}
sayGreeting("jamka");

function findMin(a, b, c) {
  if (a < b) {
    if (a < c) {
      console.log(a);
    } else {
      c;
    }
  } else {
    if (b < c) {
      console.log(b);
    } else {
      console.log(c);
    }
  }
}
findMin(4, 5, 6);

function findMin(a, b, c) {
  if (a < b && a < c) {
    console.log(a);
  } else if (b < a && b < c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
findMin(40, 50, 6);

// bodlogo1 
function print1toNnumber

// bodlogo3

function findSum(n) {
  let sum = 0;
  for (i = 1; i <= 6; i++) {
    sum += i;
  }
  console.log(sum);
}
findSum(6);

//bodlogo6
function findCountDigits(n){
  let i=0  
  for(a=n;a>1;a/=10){
       i++
    }console.log(i)
}
findCountDigits(1234)

let number=123
let i=0
while(number>1){i=i+1
    number/=10
    
}console.log(i)
let size=5
for(i=0;i<size;i++){
  let star=""
  for(j=0;j<size-i-1;j++){
    star+="-"
  }
  for(j=0;j<=4;j++){
    star+="*"
  }console.log(star)
}