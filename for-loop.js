// initialize; condition; update
for (i = 1; i < 10; i++) {
  console.log(i);
}

let size = 5;
for (let i = 1; i <= size; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//number patterns
// bodlogo 1

let size = 5;
for (let i = 0; i < size; i++) {
  let result = "";
  for (let j = 0; j < size; j++) {
    result += j + 1;
  }
  console.log(result);
}

// bodlog2
let size = 5;
for (let i = 0; i < size; i++) {
  let result = "";
  for (let j = 0; j <= i; j++) {
    result += j + 1;
  }
  console.log(result);
}

// bodlogo3
let size = 5;
for (i = 0; i < size; i++) {
  let result = "";
  for (j = 0; j < size - i; j++) {
    result += j + 1;
  }
  console.log(result);
}

// bodlogo4
let size = 5;
for (i = 0; i < size; i++) {
  result = "";
  for (j = 0; j < i + 1; j++) {
    result += i + 1;
  }
  console.log(result);
}
// bodlogo5
let size = 5;
for (i = 0; i < size; i++) {
  result = "";
  for (j = 0; j < i + 1; j++) {
    result += i - j + 1;
  }
  console.log(result);
}

// bodlogo6
let size = 5;
let a = 0;
for (i = 0; i < size; i++) {
  result = "";
  for (j = 0; j < i + 1; j++) {
    a = a + 1;
    result += a;
  }
  console.log(result);
}
