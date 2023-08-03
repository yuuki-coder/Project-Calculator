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
let operators = [];
let total;

let calc = (operator) => {
  switch (operator) {
    case "+":
      total += newArray[newArray.length - 1];
      break;
    case "-":
      total -= newArray[newArray.length - 1];
      break;
    case "*":
      total *= newArray[newArray.length - 1];
      break;
    case "÷":
      total /= newArray[newArray.length - 1];
      break;
  }
};

let update = () => {
  calc(operators[operators.length - 1]);
  bottomScreen.innerText = total;
};

let showScreenTop = (operator) => {
  if (Number.isInteger(total) == true) {
    topScreen.innerText = `${total} ${operator}`;
  } else {
    topScreen.innerText = `${total.toFixed(2)} ${operator} `;
  }
};

let showScreenBottom = () => {
  if (Number.isInteger(total) == true) {
    bottomScreen.innerText = total;
  } else {
    bottomScreen.innerText = total.toFixed(2);
  }
};

let errorMessage = () => {
  if (total == Infinity || total == -Infinity) {
    topScreen.innerText = `ERROR!`;
    bottomScreen.innerText = `PRESS CLEAR TO CONTINUE`;
  }
};

button.forEach((element) =>
  element.addEventListener("click", () => {
    array.push(element.innerText);
    bottomScreen.innerText = array.join("");
    errorMessage();
  })
);

dot.addEventListener("click", () => {
  if (bottomScreen.innerText.length == 0) {
  } else if (bottomScreen.innerText.includes(dot.innerText)) {
  } else {
    array.push(dot.innerText);
    bottomScreen.innerText = array.join("");
    errorMessage();
  }
});

clear.addEventListener("click", () => {
  topScreen.innerText = "";
  bottomScreen.innerText = "";
  array = [];
  newArray = [];
  operators = [];
  total = 0;
});

del.addEventListener("click", () => {
  array.pop("");
  bottomScreen.innerText = array.join("");
  errorMessage();
});

plus.addEventListener("click", () => {
  if (array.length == 0) {
  } else if (newArray.length > 0) {
    newArray.push(Number(array.join("")));
    update();
    operators.push("+");
    showScreenTop("+");
    array = [];

    showScreenBottom();
  } else {
    newArray.push(Number(array.join("")));
    total = newArray[0];
    showScreenTop("+");
    array = [];
    operators.push("+");
  }
  errorMessage();
});

minus.addEventListener("click", () => {
  if (array.length == 0) {
    array.push("-");
    bottomScreen.innerHTML = array.join("");
  } else if (newArray.length > 0) {
    newArray.push(Number(array.join("")));
    update();
    topScreen.innerText = `${total} -`;
    array = [];
    operators.push("-");
    showScreenTop("-");
    showScreenBottom();
  } else {
    newArray.push(Number(array.join("")));
    total = newArray[0];
    showScreenTop("-");
    array = [];
    operators.push("-");
  }
  errorMessage();
});

multiply.addEventListener("click", () => {
  if (array.length == 0) {
  } else if (newArray.length > 0) {
    newArray.push(Number(array.join("")));
    update();
    topScreen.innerText = `${total} *`;
    array = [];
    operators.push("*");
    showScreenTop("*");
    showScreenBottom();
  } else {
    newArray.push(Number(array.join("")));
    total = newArray[0];
    showScreenTop("*");
    array = [];
    operators.push("*");
  }
  errorMessage();
});

division.addEventListener("click", () => {
  if (array.length == 0) {
  } else if (newArray.length > 0) {
    newArray.push(Number(array.join("")));
    update();
    topScreen.innerText = `${total} ÷`;
    array = [];
    operators.push("÷");
    showScreenTop("÷");
    showScreenBottom();
  } else {
    newArray.push(Number(array.join("")));
    total = newArray[0];
    showScreenTop("÷");
    array = [];
    operators.push("÷");
  }
  errorMessage();
});

equal.addEventListener("click", () => {
  if (array.length == 0) {
  } else if (newArray.length > 0) {
    topScreen.innerText += ` ${array.join("")} =  `;
    newArray.push(Number(array.join("")));
    calc(operators[operators.length - 1]);

    showScreenBottom();
    array = [total];
    newArray = [];
  }
  errorMessage();
});
