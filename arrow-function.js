const myFunction = (a, b) => a * b;

// array -s filterdej objectoo oorchilj shine array gargaj awah

// const animals = [
//   { name: "dog", leg: 4, height: 10 },
//   { name: "cat", leg: 4, height: 5 },
//   { name: "kangroo ", leg: 2, height: 20 },
//   { name: "chicken", leg: 2, height: 3 },
// ];

// const find4LeggedAnimals = (arr) => {
//   let filteredAnimals = [];
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].leg == 4) {
//       filteredAnimals[count] = {
//         name: arr[i].name,
//         height: arr[i].height,
//       };
//       count++;
//     }
//   }
//   return filteredAnimals;
// };
// const filteredAnimals = find4LeggedAnimals(animals);
// console.log(filteredAnimals);

let students = [
  { name: "boldo", age: 15, grade: 30, balance: 300, gender: "male" },
  { name: "dorjo", age: 30, grade: 30, balance: 20000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 40000, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 50, gender: "male" },
  { name: "boldo", age: 25, grade: 50, balance: 1000, gender: "male" },
];
// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.

const findMinGradeStudent = (arr) => {
  let minGrade = arr[0].grade;
  let minGradeStudents = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].grade <= minGrade) {
      minGrade = arr[i].grade;
      minGradeStudents[count] = arr[i];
      count++;
    }
  }
  return minGradeStudents;
};
resultMinGradeStudent = findMinGradeStudent(students);
console.log(resultMinGradeStudent);

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ array болгон ялгаж буцаадаг функц бич.

const findChildren = (arr) => {
  let children = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      children[count] = {
        name: arr[i].name,
        balance: arr[i].balance,
        gender: arr[i].gender,
      };
      count++;
    }
  }
  return children;
};
resultChildren = findChildren(students);
console.log("children", resultChildren);

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

const findSumOfGrade = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i].grade;
  }
  return sum;
};
let resultSum = findSumOfGrade(students);
console.log(resultSum);

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

const findStudentsByName = (arr, name) => {
  let studentsByName = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].name == name) {
      studentsByName[count] = {
        age: arr[i].age,
        balance: arr[i].balance,
        grade: arr[i].grade,
        gender: arr[i].gender,
      };
      count++;
    }
  }
  return studentsByName;
};
resultStudentsByName = findStudentsByName(students, "boldo");
console.log("studentsByName=", resultStudentsByName);

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

const makeSortedByGrade = (arr) => {
  const sortedByGrade = arr.sort((a, b) => b.grade - a.grade);
  return sortedByGrade;
};
resultSortedByGrade = makeSortedByGrade(students);
console.log("sortedByGrade", resultSortedByGrade);

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ array үүсгэж буцаа.

const makeRichStudentsArray = (arr) => {
  let richStudents = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].balance > 10000) {
      richStudents[count] = {
        name: arr[i].name,
        balance: arr[i].balance,
      };
      count++;
    }
  }
  return richStudents;
};
let resultRichStudents = makeRichStudentsArray(students);
console.log("richStudents", resultRichStudents);

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

const makeObjectByNameAndCount = (arr) => {
  let nameAndCount = [];
  for (i = 0; i < arr.length; i++) [];
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[i].name == arr[j].name) {
        count++;
      }
    }
    nameAndCount[i] = { name: arr[i].name, count: count };
  }
  return nameAndCount;
};
resultNameAndCount = makeObjectByNameAndCount(students);
console.log("nameAndCount", resultNameAndCount);

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }

const findAvgGradeByGender = (arr) => {
  let sumMale = 0;
  let sumFemale = 0;
  let countMale = 0;
  let countFemale = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == male) {
      sumMale += arr[i].grade;
      countMale++;
    }
  }
};
