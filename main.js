function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return "rgb(" + r + ", " + g + ", " + b + ")"; // at least this is working
}
function onMouseClick(square) {
  //let squareBrick = document.getElementsByClassName(".square");  // no diff
  let squareBrick = document.getElementsByName("squarees"); // no diff
  let vertiBrick = document.getElementsByClassName(".vertical");
  let horiBrick = document.getElementsByClassName(".horizontal");
  const changeColor = randomColor();

  while (true) {
    alert(`the random color is: ${changeColor}`);
    squareBrick.style.backgroundColor = changeColor; // typeError undefiened setting
  }
}

// check if the cell is empty or not
// function isCellEmpty(column, row) {
//   const allBricks = document.querySelectorAll(".brick");
//   const targetCell = Array.from(allBricks).find(
//     (brick) => brick.style.gridColumn === column && brick.style.gridRow === row
//   );
//   return !targetCell;                      // returns true everytime
// }

// function clickedColumn(col) {
//   (col) => col.style.gridColumn;
//   return col;
// }
// function clickedRow(row) {
//   (row) => row.style.gridColumn;
//   return row;
//   }
