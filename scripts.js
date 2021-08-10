let holdOne = ''; 
let holdTwo = '';
let currentOperation = null;
let clearDisplay = false;

//DOM Element Buttons
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('deleteBtn');
const equalsButton =  document.getElementById('equalsBtn');
const decimalButton = document.getElementById('decimalBtn');
const numberButtons = document.querySelectorAll('[data-num]');
const operationButton = document.querySelectorAll('[data-operator]');
//Screens
const lastOperationScreen = document.getElementById('lastOperation');
const currentOperationScreen = document.getElementById('currentOperation');

//Global Event Listners
clearButton.addEventListener('click', resetScreen);
equalsButton.addEventListener('click', tagNumberTwo);
deleteButton.addEventListener('click', deleteNum);
decimalButton.addEventListener('click', addDecimal);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {tagNumberOne(button.textContent)
    });
});

operationButton.forEach((button) => {
    button.addEventListener('click', () => {tagOperator(button.textContent)
    }); 
});

//Allows display of numbers on bottom screen(currentOperationsScreen)
function tagNumberOne(number){
    if ( currentOperationScreen.textContent === '0' || clearDisplay == true) {
        clearScreen();
    } 
    currentOperationScreen.textContent += number; 
}

//accepts an operator and holds number on currentOperationScreen
function tagOperator(operator) {

    if (currentOperation !== null) {
        tagNumberTwo()
    }
    holdOne = currentOperationScreen.textContent;
    currentOperation = operator;
    lastOperationScreen.textContent = `${holdOne} ${currentOperation}`;
    clearDisplay = true; 
}


// stores holdTwo value, initilizes operate();
function tagNumberTwo() {
    holdTwo = currentOperationScreen.textContent;

    currentOperationScreen.textContent = operate(currentOperation, holdOne, holdTwo);
    lastOperationScreen.textContent = `${holdOne} ${currentOperation} ${holdTwo} = `;
    
    currentOperation = null;
}

//Allows decimals 
function addDecimal() {
    if (clearDisplay) {
        clearScreen();
    }
    if (currentOperationScreen.textContent.includes('.')) {
        return
    }
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0';
    } 
    
    currentOperationScreen.textContent += '.';
    }

//converts currentOperationsScreen to a string, allows user to remove number
function deleteNum() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0,-1);
}

//Resets screen to default values
function resetScreen() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = 'xxx';
    holdOne = '';
    holdTwo = '';
    currentOperation = null;
}

//Allows tagNumber() to remove leading 0
function clearScreen() {
    currentOperationScreen.textContent = '';
    clearDisplay = false;
}

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function operate(operator, a, b){
     a = Number(a);
     b = Number(b);

    switch(operator) {
        
        case '+' :
            return add(a,b);
            // break;
        case '-' :
           return subtract(a,b);
            // break;
        case 'x' :
           return multiply(a,b);
            // break;
        case '÷' :
            if (b === 0) {
                 alert('Haha, nice one! You can\'t divide by 0!');
                 return null
            } else return divide(a,b);
            // break;

        }

}