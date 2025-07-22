let size = 5;
let row = 1;
while (row <= size) {
  let result = "";
  let column = 1;
  while (column < 2 * size) {
    if (column > size - row && column < size + row) {
      result = result + "*";
    } else {
      result = result + " ";
    }
    column = column + 1;
  }
  console.log(result);
  row = row + 1;
}
