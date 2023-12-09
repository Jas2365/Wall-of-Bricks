function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`; // at least this is working
}

// //let squareBrick = document.getElementsByClassName(".square"); // no diff
// let squareBrick = document.getElementsByName("squarees"); // no diff
// let vertiBrick = document.getElementsByClassName(".vertical");
// let horiBrick = document.getElementsByClassName(".horizontal");
// let changeColor = randomColor();
function onMouseClick() {
  let Brick = document.getElementById();
  Brick.style.backgroundColor = randomColor();
}

// function onMouseClick() {
//  let squareBrick = document.getElementById("sq-1");
//  squareBrick.style.backgroundColor = randomColor();
//
// }
// function onMouseClick() {
//   let squareBrick = document.getElementById("sq-2");
//   squareBrick.style.backgroundColor = randomColor();
// }

// function onMouseClick() {
//   let squareBrick = document.getElementById("sq-3");
//   squareBrick.style.backgroundColor = randomColor();
// }

// function onMouseClick() {
//   let squareBrick = document.getElementById("sq-4");
//   squareBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let squareBrick = document.getElementById("sq-5");
//   squareBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let squareBrick = document.getElementById("sq-6");
//   squareBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let squareBrick = document.getElementById("sq-7");
//   squareBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-1");
//   rectangleBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-2");
//   rectangleBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-3");
//   rectangleBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-4");
//   rectangleBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-5");
//   rectangleBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-6");
//   rectangleBrick.style.backgroundColor = randomColor();
// }
// function onMouseClick() {
//   let rectangleBrick = document.getElementById("rec-7");
//   rectangleBrick.style.backgroundColor = randomColor();
// }

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
