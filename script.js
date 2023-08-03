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
    array = [];
  }
};

button.forEach((element) =>
  element.addEventListener("click", () => {
    array.push(element.innerText);
    bottomScreen.innerText = array.join("");
    errorMessage();
  })
);

dot.addEventListener(
  "click",
  (dotFunction = () => {
    if (bottomScreen.innerText.length == 0) {
    } else if (bottomScreen.innerText.includes(dot.innerText)) {
    } else {
      array.push(dot.innerText);
      bottomScreen.innerText = array.join("");
      errorMessage();
    }
  })
);

clear.addEventListener(
  "click",
  (clearFunction = () => {
    topScreen.innerText = "";
    bottomScreen.innerText = "";
    array = [];
    newArray = [];
    operators = [];
    total = 0;
  })
);

del.addEventListener(
  "click",
  (delFunction = () => {
    array.pop("");
    bottomScreen.innerText = array.join("");
    errorMessage();
  })
);

plus.addEventListener(
  "click",
  (plusFunction = () => {
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
  })
);

minus.addEventListener(
  "click",
  (minusFunction = () => {
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
  })
);

multiply.addEventListener(
  "click",
  (multiplyFunction = () => {
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
  })
);

division.addEventListener(
  "click",
  (divisionFunction = () => {
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
  })
);

equal.addEventListener(
  "click",
  (equalFunction = () => {
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
  })
);

document.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 48:
      array.push("0");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 49:
      array.push("1");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 50:
      array.push("2");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 51:
      array.push("3");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 52:
      array.push("4");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 53:
      array.push("5");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 54:
      array.push("6");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 55:
      array.push("7");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;
    case 57:
      array.push("9");
      bottomScreen.innerText = array.join("");
      errorMessage();
      break;

    case 8:
      delFunction();
      break;

    case 27:
      clearFunction();

    case 190:
      dotFunction();
      break;

    case 187:
      equalFunction();
      break;

    case 189:
      minusFunction();
      break;
  }

  if (event.keyCode == 187 && event.shiftKey == true) {
    plusFunction();
  }
  if (event.keyCode == 56 && event.shiftKey == true) {
    multiplyFunction();
  }
  if (event.key == "AltGraph" && event.keyCode == 225) {
    divisionFunction();
  }
  if (event.keyCode == 56 && event.shiftKey == false) {
    array.push("8");
    bottomScreen.innerText = array.join("");
    errorMessage();
  }
});
