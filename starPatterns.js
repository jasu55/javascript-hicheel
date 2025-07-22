// bodlogo1 square star pattern
// bodlogo5 hollow rhombus star pattern
let size = 5;
for (i = 0; i < size; i++) {
  result = "";
  for (j = 0; j < size - i - 1; j++) {
    result += " ";
  }
  for (j = 0; j < size; j++) {
    if (j == 0 || j == size - 1 || i == 0 || i == size - 1) {
      result += "*";
    } else {
      result += " ";
    }
  }
  console.log(result);
}
