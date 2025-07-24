// array of objects
let students = [
  { name: "boldo", age: 20, grade: 30, balance: 300, gender: "male" },
  { name: "dorjo", age: 30, grade: 30, balance: 2000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 400, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 50, gender: "male" },
];

function findOldestStudent(arr) {
  let oldestStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > oldestStudent.age) {
      oldestStudent = arr[i];
    }
  }
  return oldestStudent;
}
let manaiDuu = findOldestStudent(students);
console.log("oldestStudent", manaiDuu);

function findRichestStudent(arr) {
  let richestStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (richestStudent.balance < arr[i].balance) {
      richestStudent = arr[i];
    }
  }
  return richestStudent;
}
let bayka = findRichestStudent(students);
console.log("richestStudent", bayka);

function findStudentByAge(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      return arr[i];
    }
  }
  return "suragch oldsongvi";
}
let exactYearStudent = findStudentByAge(students, 320);
console.log("exactYearStudent", exactYearStudent);

// bodlogo3
// bvh suragchdiin dundaj nas oldog fucntion bich

function findAvgAge(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }
  return sum / i;
}
console.log("avgAge", findAvgAge(students));

//bodlogo4
// nasand hvrsen suragchdiin dundaj balanciig oldog fuction bich

function findAdultAvgBalance(arr) {
  let sum = 0;
  let j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      j++;
      sum += arr[i].balance;
    }
  }
  return sum / j;
}
console.log("avgAdultBalance", findAdultAvgBalance(students));
//bodlogo5
// suragch object deer gender gesen property nem 'male' eswel 'female' gesen utga og
// hichneen eregtei suragchiig oldog function bich

function findMaleStudentsCount(arr) {
  let j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      j++;
    }
  }
  return j;
}
console.log("maleStudentsCount", findMaleStudentsCount(students));

// bodlogo6
// emegtei suragch niit suragchiin heden huwi baigaag oldog function bich

function findPercentOfFemaleStudentsCount(arr) {
  j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      j++;
    }
  }
  return (j / i) * 100;
}
console.log(
  "percentOfFemaleStudentsCount",
  findPercentOfFemaleStudentsCount(students),
  "%"
);
