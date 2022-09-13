"use strict";

// let cell = document.querySelectorAll(".cell");
let containerMain = document.getElementById("container");
let button = document.getElementById("btn");
let row = document.querySelector(".row");



let gridSize = function (number) {
  let i = 0, repeat = number;
  number = Math.min(100, Math.max(0, number));
  containerMain.innerHTML =
    `<div class="row">${'<div class="cell"></div>'.repeat(
      number
    )}</div>`.repeat(number);

};

gridSize(16);


button.addEventListener("click", function () {
  let userInput = prompt("Enter number of squares 😁");
  if (!Number(userInput)) {
    alert("Enter only numbers. Try again 🙃");
  } else {
    gridSize(userInput);
  }
});
