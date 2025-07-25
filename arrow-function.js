const myFunction = (a, b) => a * b;

// array -s filterdej objectoo oorchilj shine array gargaj awah

const animals = [
  { name: "dog", leg: 4, height: 10 },
  { name: "cat", leg: 4, height: 5 },
  { name: "kangroo ", leg: 2, height: 20 },
  { name: "chicken", leg: 2, height: 3 },
];

const find4LeggedAnimals = (arr) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].leg == 4) {
      filteredAnimals[count] = {
        name: arr[i].name,
        height: arr[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};
const filteredAnimals = find4LeggedAnimals(animals);
console.log(filteredAnimals);

let students = [
  { name: "boldo", age: 20, grade: 30, balance: 300, gender: "male" },
  { name: "dorjo", age: 30, grade: 30, balance: 2000, gender: "male" },
  { name: "tsetsgee", age: 30, grade: 100, balance: 400, gender: "female" },
  { name: "bata", age: 10, grade: 50, balance: 50, gender: "male" },
];
// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.

const minGradeStudent = (arr) => {
  let minGrade = arr[0].grade;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].grade < minGrade) {
      minGrade = arr[i].grade;
    }
  }
};

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ array болгон ялгаж буцаадаг функц бич.

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }
