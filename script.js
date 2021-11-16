const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');

addition.onclick = () => console.log('Hello'); // <---This works
/*subtraction.onclick = () => operate(a, b, operator);
multiplication.onclick = () => operate(a, b, operator);
division.onclick = () => operate(a, b, operator); */


//MATH OPERATORS
add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

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
    }
}


/*
console.log(operate(5, 4, 'add'));
console.log(operate(5, 4, 'subtract'));
console.log(operate(5, 4, 'multiply'));
console.log(operate(5, 4, 'divide')); */


