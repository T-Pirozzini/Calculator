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
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => a ** b;

//CALCULATE
const operate = (a, b, operator) => {
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
const displayValue = (value) => displayArea.textContent = displayArea.textContent + value;
const getDisplayValue = () => displayArea.textContent;

const setOperator = (operator) => {
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

const setInput = (value) => {
  if (firstInput == null) {
    firstInput = value;
  } else {
    secondInput = value;
  }
}

const clearDisplay = () => {
  displayArea.textContent = "";
}

const clearAllValues = () => {
  firstInput = null;
  secondInput = null;
  currentOperator = null;
  clearDisplay();
}

const generateResult = () => {
  if (firstInput && currentOperator && !clear) {
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
    console.log(displayCounter)
    clear = false;
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    setInput(getDisplayValue());
    setOperator(e.target.id);
    displayValue(e.target.textContent);
    clear = true;
  })
})

equalSign.addEventListener("click", () => {
  result = generateResult();
  clearDisplay(); 
  displayValue(result);  
}) 

clearSign.addEventListener('click', () => {
  clearAllValues();
  displayCounter = 0;
});

backSign.addEventListener('click', () => {  
  displayArea.textContent = displayArea.textContent.slice(0,-1) 
});

decimal.addEventListener('click', (e) => {
  if (displayArea.textContent.includes('.')) {    
    return
  }
  displayValue(e.target.textContent)
  clear = false
});
