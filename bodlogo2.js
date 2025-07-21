let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let result = "";
  while (column > 0) {
    if (
      row == 1 ||
      row == size ||
      column == 1 ||
      column == size ||
      row - 1 == size - column
    ) {
      result = result + "*";
    } else {
      result = result + " ";
    }
    column = column - 1;
  }
  console.log(result);
  row = row - 1;
}
