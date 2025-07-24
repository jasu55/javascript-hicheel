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

// bodlogo1 1s n toonuudiig hewle
function print1toNnumbers(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
print1toNnumbers(6);

// bodlogo2 1s N too hvrtel tegsh toonuudiig hewle
function print1toNevenNumbers(n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
print1toNevenNumbers(6);

// bodlogo3 1s N too hvrtelh niilber

function findSum(n) {
  let sum = 0;
  for (i = 1; i <= 6; i++) {
    sum += i;
  }
  console.log(sum);
}
findSum(6);

// bodlogo4 1s N too hvrtelh sondgoi toog ol
function print1toNoddNumbers(n) {
  for (i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
print1toNoddNumbers(6);

//bodlogo 5 n toonii vrjweriin hvrd hewle
function printMultiplicationTable(n) {
  for (i = 1; i < 10; i++) {
    console.log(n * i);
  }
}
printMultiplicationTable(6);

//bodlogo6
function findCountDigits(n) {
  for (i = 0; n > 1; i++) {
    n /= 10;
  }
  console.log(i);
}
findCountDigits(1234);

// bodlogo 7 ehnii bolon svvliin orong ol
function findFirstAndLastDigit(n) {
  // ehnii oron
  for (i = n; i >= 10; i /= 10) {}
  console.log(parseInt(i));
  //svvliin oron
  console.log(n % 10);
}
findFirstAndLastDigit(4332);
console.log();

//bodlogo8 ehnii ba svvliin orongiin niilberiig ol
function findSumOfFirstAndLastDigits(n) {
  for (i = n; i >= 10; i /= 10) {}
  console.log(parseInt(i) + (n % 10));
}
findSumOfFirstAndLastDigits(4312311);

//bodlogo9 ehnii bolon svvlin orong solj bich
function changeFirstAndLastDigits(n) {
  let c = n;
  for (j = 0; c >= 1; j++) {
    c /= 10;
  }
  let countDigits = j;
  for (i = n; i >= 10; i /= 10) {}
  let a = parseInt(i) % 10;
  let b = n % 10;
  n = n - (a - b) * 10 ** (countDigits - 1) + (a - b);

  console.log(n);
}
changeFirstAndLastDigits(1234567);

//bodlogo 10 tsifrvvdiin niilberiig ol
function findSumOfDigits(n) {
  let s = 0;
  for (i = n; i >= 1; i /= 10) {
    let a = parseInt(i % 10);
    s += a;
  }
  console.log(s);
}
findSumOfDigits(5464);

//bodlogo11 too urwuu daraallaar hewle
function reverseDigitsDigits(n) {
  let c = n;
  for (j = 0; c >= 1; j++) {
    c /= 10;
  }
  let countDigits = j;
  for (d = 1; d <= countDigits / 2; d++) {
    for (i = n; i >= 10 ** d; i /= 10) {}
    let a = parseInt(i) % 10;
    let b = parseInt((n / 10 ** (d - 1)) % 10);
    n = n - (a - b) * 10 ** (countDigits - d) + (a - b) * 10 ** (d - 1);
  }
  console.log(n);
}
reverseDigitsDigits(1234567);

// bodlogo12 too bvriin dawtamjiig tootsoh program bich

function printFrequencyOfDigit(n) {
  for (j = 0; j < 10; j++) {
    let c = 0;
    let b = 0;
    for (i = n; i > 1; i /= 10) {
      let a = parseInt((n / 10 ** b) % 10);
      b++;
      if (a == j) {
        c++;
      }
    }
    console.log(j, ":", c);
  }
}
printFrequencyOfDigit(12345445567788009);
