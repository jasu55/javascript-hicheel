let grades = [100, 100, 33, -33, -20];
function findSumOfPositive(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let result = findSumOfPositive(grades);
console.log(result);

function findMax(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maxGrade = findMax(grades);
console.log(maxGrade);

// array dotorh hamgiin baga eyreg toog oloh function bich

function findPositiveMin(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min && arr[i] > 0) {
      min = arr[i];
    }
  }
  return min;
}

let positiveMin = findPositiveMin(grades);
console.log("positiveMin= " + positiveMin);

// tegsh toonii dundajiig ol

function findAvgEvenNumbers(arr) {
  let sum = 0;
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
      count = count + 1;
    }
  }
  let avg = sum / count;
  return avg;
}
console.log("AvgEvenNumbers: " + findAvgEvenNumbers(grades));


