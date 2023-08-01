let button = document.querySelectorAll(".button");
let bottomScreen = document.querySelector(".bottomScreen");
let topScreen = document.querySelector(".topScreen");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let dot = document.querySelector(".dot");
let division = document.querySelector(".division");
let multiply = document.querySelector(".multiply");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let array = [];
let newArray = [];

button.forEach((element) =>
  element.addEventListener("click", () => {
    array.push(element.innerText);
    bottomScreen.innerText = array.join("");
  })
);

dot.addEventListener("click", () => {
  if (bottomScreen.innerText.includes(dot.innerText)) {
  } else {
    array.push(dot.innerText);
    bottomScreen.innerText = array.join("");
  }
});

clear.addEventListener("click", () => {
  topScreen.innerText = "";
  bottomScreen.innerText = "";
  array = [];
  newArray = [];
  console.log([array]);
  console.log([newArray]);
});

del.addEventListener("click", () => {
  array.pop("");
  bottomScreen.innerText = array.join("");
});

plus.addEventListener("click", () => {
  if (array.length == 0) {
  } else {
    array.push(" + ");
    console.table(array);
    topScreen.innerText += ` ${array.join("")} `;
    newArray.push(array.join(""));
    array = [];
  }
});

minus.addEventListener("click", () => {
  if (array.length == 0) {
  } else {
    array.push(" - ");
    console.table(array);
    topScreen.innerText += ` ${array.join("")} `;
    newArray.push(array.join(""));
    array = [];
  }
});

multiply.addEventListener("click", () => {
  if (array.length == 0) {
  } else {
    array.push(" * ");
    console.table(array);
    topScreen.innerText += ` ${array.join("")} `;
    newArray.push(array.join(""));
    array = [];
  }
});

division.addEventListener("click", () => {
  if (array.length == 0) {
  } else {
    array.push(" / ");
    console.table(array);
    topScreen.innerText += ` ${array.join("")} `;
    newArray.push(array.join(""));
    array = [];
  }
});
