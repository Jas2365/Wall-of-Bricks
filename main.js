function randomColor() {
  let r = Math.floor(Math.random() * 250);
  let g = Math.floor(Math.random() * 250);
  let b = Math.floor(Math.random() * 250);
  if (r <= 243 && g <= 243 && b <= 243) {
    return `rgb(${r}, ${g}, ${b})`;
  }
}
function onMouseClick() {
  document
    .getElementById("sq-1")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("sq-2")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("sq-3")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("sq-4")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("sq-5")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("sq-6")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("sq-7")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-1")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-2")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-3")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-4")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-5")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-6")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
  document
    .getElementById("rec-7")
    .addEventListener("click", function onClick(event) {
      event.target.style.backgroundColor = randomColor();
    });
}

// //let squareBrick = document.getElementsByClassName(".square"); // no diff
// let squareBrick = document.getElementsByName("squarees"); // no diff
// let vertiBrick = document.getElementsByClassName(".vertical");
// let horiBrick = document.getElementsByClassName(".horizontal");
// let changeColor = randomColor();
//
// let allBricks = document.getElementsByTagName("button");
// let allBrickId = new Array(allBricks.length);
// let brickIds = new Array(allBricks.length);
// function getBrickId() {
//   for (let i = 0; i < allBricks.length; i++) {
//     let ele = allBricks[i];
//     allBrickId.push(ele.id);
//   }
//   console.log(allBrickId);
//   return allBrickId;
// }

// function onMouseClick() {
//   switch (allBrickId) {
//     case "sq-1":
//       let square = document.getElementById("sq-1");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;
//     case "sq-2":
//       square = document.getElementById("sq-2");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;
//     case "sq-3":
//       square = document.getElementById("sq-3");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;
//     case "sq-4":
//       square = document.getElementById("sq-4");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;
//     case "sq-5":
//       square = document.getElementById("sq-5");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;
//     case "sq-6":
//       square = document.getElementById("sq-6");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;
//     case "sq-7":
//       square = document.getElementById("sq-7");
//       square.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = randomColor();
//       });
//       break;

//     default:
//       whiteSpace = document.getElementById("0");
//       whiteSpace.addEventListener("click", function onClick(event) {
//         event.target.style.backgroundColor = "white";
//       });
//       break;
//   }
// }

// function onMouseClick() {
//  let squareBrick = document.getElementById("sq-1");
//  squareBrick.style.backgroundColor = randomColor();
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
// },
// function clickedRow(row) {
//   (row) => row.style.gridColumn;
//   return row;
