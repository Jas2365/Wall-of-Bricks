function randomColor() {
  let r = Math.floor(Math.random() * 250);
  let g = Math.floor(Math.random() * 250);
  let b = Math.floor(Math.random() * 250);
  return `rgb(${r}, ${g}, ${b})`;
}

// fn to get the values of adjcent bricks
function getValue(value, brickColor) {
  brickSelf = document.getElementById(value);
  brickColor = document.getElementById(value).className;

  rightBrick = document.getElementById(value + 1);
  toppBrick = document.getElementById(value - 6);
  leftBrick = document.getElementById(value - 1);
  bottomBrick = document.getElementById(value + 6);
  // center
  let center = [8, 9, 10, 11, 14, 15, 16, 17, 20, 21, 22, 23];
  if (value < 30) {
    for (let i = 0; i < center.length; i++) {
      if (value == center[i]) {
        right = rightBrick.className;
        topp = toppBrick.className;
        left = leftBrick.className;
        bottom = bottomBrick.className;
      }
    }
  }
  // borders
  let topBorder = [2, 3, 4, 5];
  if (value > 1 && value < 7) {
    for (let i = 0; i < topBorder.length; i++) {
      if (value == topBorder[i]) {
        right = rightBrick.className;
        topp = "border";
        left = leftBrick.className;
        bottom = bottomBrick.className;
      }
    }
  }
  let leftBorder = [7, 13, 19];
  if (value > 6 && value < 20) {
    for (let i = 0; i < leftBorder.length; i++) {
      if (value == leftBorder[i]) {
        right = rightBrick.className;
        topp = toppBrick.className;
        left = "border";
        bottom = bottomBrick.className;
      }
    }
  }
  let rightBorder = [12, 18, 24];
  if (value > 11 && value < 25) {
    for (let i = 0; i < rightBorder.length; i++) {
      if (value == rightBorder[i]) {
        right = "border";
        topp = toppBrick.className;
        left = leftBrick.className;
        bottom = bottomBrick.className;
      }
    }
  }
  let bottomBorder = [26, 27, 28, 29];
  if (value > 25 && value < 30) {
    for (let i = 0; i < bottomBorder.length; i++) {
      if (value == bottomBorder[i]) {
        right = rightBrick.className;
        topp = toppBrick.className;
        left = leftBrick.className;
        bottom = "border";
      }
    }
  }
  // corners

  switch (value) {
    case 1:
      right = rightBrick.className;
      topp = "border";
      left = "border";
      bottom = bottomBrick.className;

      break;
    case 6:
      right = "border";
      topp = "border";
      left = leftBrick.className;
      bottom = bottomBrick.className;
      break;
    case 25:
      right = rightBrick.className;
      topp = toppBrick.className;
      left = "border";
      bottom = "border";
      break;
    case 30:
      right = "border";
      topp = toppBrick.className;
      left = leftBrick.className;
      bottom = "border";
      break;
    default:
      break;
  }
  switchingColor(
    brickSelf,
    brickColor,
    right,
    rightBrick,
    topp,
    toppBrick,
    left,
    leftBrick,
    bottom,
    bottomBrick,
    value
  );
}
function switchingColor(
  brickSelf,
  brickColor,
  right,
  rightBrick,
  topp,
  toppBrick,
  left,
  leftBrick,
  bottom,
  bottomBrick,
  value
) {
  {
    // see self and around
    if (brickColor != "white") {
      if (right != "white") {
        if (topp != "white") {
          if (left != "white") {
            if (bottom != "white") {
              document.getElementById(value).style.backgroundColor =
                randomColor();
            } else if (bottom == "border") {
              document.getElementById(value).style.backgroundColor =
                randomColor();
              document.getElementById(value).classList.add("border");
            } else {
              bottomBrick.style.backgroundColor = randomColor();
              bottomBrick.className = brickColor;
              bottomBrick = brickSelf;
              document.getElementById(value).className = "white";
              document.getElementById(value).style.backgroundColor = "white";
            }
          } else if (left == "border") {
            document.getElementById(value).style.backgroundColor =
              randomColor();
            document.getElementById(value).classList.add("border");
          } else {
            leftBrick.style.backgroundColor = randomColor();
            leftBrick.className = brickColor;
            leftBrick = brickSelf;
            document.getElementById(value).className = "white";
            document.getElementById(value).style.backgroundColor = "white";
          }
        } else if (topp == "border") {
          document.getElementById(value).style.backgroundColor = randomColor();
          document.getElementById(value).classList.add("border");
        } else {
          toppBrick.style.backgroundColor = randomColor();
          toppBrick.className = brickColor;
          toppBrick = brickSelf;
          document.getElementById(value).className = "white";
          document.getElementById(value).style.backgroundColor = "white";
        }
      } else if (right == "border") {
        document.getElementById(value).style.backgroundColor = randomColor();
        document.getElementById(value).classList.add("border");
      } else {
        rightBrick.style.backgroundColor = randomColor();
        rightBrick.className = brickColor;
        rightBrick = brickSelf;
        document.getElementById(value).className = "white";
        document.getElementById(value).style.backgroundColor = "white";
      }
    }
  }
}
// function onMouseClick() {
//   document
//     .getElementById("1")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("2")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("3")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("4")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("5")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("6")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("7")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("8")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("9")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("10")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("11")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("12")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("13")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("14")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("15")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("16")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("17")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("18")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("19")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("20")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("21")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("22")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("23")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("24")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("25")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("26")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("27")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("28")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("29")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
//   document
//     .getElementById("30")
//     .addEventListener("click", function onClick(event) {
//       event.target.style.backgroundColor = randomColor();
//     });
// }
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
