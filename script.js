//START-STATE
let currentOperator = null;
let firstInput = null;
let secondInput = null;
let clear = false;
let result = null;

//DISPAY
const displayArea = document.getElementById('display-area');
const numberButtons = document.querySelectorAll('.numButton')
const decimal = document.getElementById('decimal');

//OPERATORS
const operators = document.querySelectorAll('.operator');
const powerOf = document.getElementById('power');
const equalSign = document.getElementById('equal');
const clearSign = document.getElementById('clear');
const backSign = document.getElementById('back');

//MATH OPERATORS
add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;
power = (a, b) => a ** b;

//CALCULATE
operate = (a, b, operator) => {
    switch(operator) {
        case "add":
          return add(a,b);
          break;
        case "subtract":
          return subtract(a,b);
          break;
        case "multiply":
          return multiply(a,b);
          break;
        case "divide":
          return divide(a,b);
          break;
        case "power":
          return power(a,b);
          break;
        default:
          return null;
    }
}

//DISPLAY VALUES
displayValue = (value) => displayArea.textContent = displayArea.textContent + value;
getDisplayValue = () => displayArea.textContent;

function setOperator(operator) {
  if (currentOperator == null) {
    currentOperator = operator;
  } else if (firstInput && secondInput) {
    result = operate(Number(firstInput), Number(secondInput), currentOperator);
    clearDisplay();
    displayValue(result);
    firstInput = result;
    secondInput = null;
    currentOperator = operator;
  }
}

function setInput(value) {
  if (firstInput == null) {
    firstInput = value;
  } else {
    secondInput = value;
  }
}

function clearDisplay() {
  displayArea.textContent = "";
}

function clearAllValues() {
  firstInput = null;
  secondInput = null;
  currentOperator = null;
  clearDisplay();
}

function clearPreviousValue() {
  let firstInput ='';
  }


function generateResult() {
  if (firstInput && currentOperator && !clear && !secondInput) {
    setInput(getDisplayValue());
    return operate(Number(firstInput), Number(secondInput), currentOperator);
  } else {
    return false;
  }
}


//EVENT LISTENERS
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {    
    if (clear) {
      clearDisplay();
    }
    displayValue(e.target.textContent);
    clear = false;
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    setInput(getDisplayValue());
    setOperator(e.target.id);
    clear = true;
  })
})

equalSign.addEventListener("click", () => {
  result = generateResult();
  clearDisplay();
  if (result) {
    displayValue(result);
  }
})
 

clearSign.addEventListener('click', () => {
  clearAllValues();
});

// BELOW NOT WORKING YET
backSign.addEventListener('click', () => {
  displayValue('666');
    clear = false;
});
/*
function clearPreviousInput() {
  firstInput.textContent = firstInput.textContent
    .toString()
    .slice(0, -1)
}
*/