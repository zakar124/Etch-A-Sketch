"use strict";

let cell = document.querySelector(".cell");
let container1 = document.getElementById("container");
let button = document.getElementById("btn");

let gridSize = function (number) {
let i = 0,
repeat = number;

container.innerHTML = `<div class="row">${'<div class="cell"> </div>'.repeat(
  number
)}</div>`.repeat(number);
}

gridSize(16);

container1.addEventListener("mouseover", (event) => {
  event.target.style.color = "purple";
});

button.addEventListener("click", function () {
  let userInput = prompt("Enter number of squares per side of grid");
  console.log(Number(userInput));
  if (!Number(userInput)) {
    alert("Enter only numbers. Try again.");
   }  else {
    gridSize(userInput);
    }
});
