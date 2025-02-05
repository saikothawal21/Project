

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');


  let currentInput = '';
 let previousInput = '';
let operator = null;

//event listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
      const key = button.dataset.key;

    if (!isNaN(key) || key === '.') {
  
      currentInput += key;
    } else if (['+', '-', '*', '/'].includes(key)) {
      
      operator = key;
      previousInput = currentInput;
      currentInput = '';
    } else if (key === '=') {
      calculate();
    } else if (key === 'AC') {
      
      currentInput = '';
      previousInput = '';
      operator = null;
    } else if (key === '%') {
      
      currentInput = (parseFloat(currentInput) / 100).toString();
    } else if (key === 'square') {
      
      currentInput = (parseFloat(currentInput) ** 2).toString();
    }

    
    updateDisplay();
  });
});


function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = num2 !== 0 ? (num1 / num2).toString() : 'Error';
      break;
    default:
      break;
  }

  operator = null;
  previousInput = '';
}


function updateDisplay() {
  display.innerText = currentInput || '0';
}
