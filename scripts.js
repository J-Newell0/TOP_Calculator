let holdOne = ''; 
let holdTwo = '';
let currentOperation = null;
let clearDisplay = false;

//Buttons
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
clearButton.addEventListener('click', clearScreen);




numberButtons.forEach((button) => {
    button.addEventListener('click', () => {tagNumber(button.textContent)
    });
});

operationButton.forEach((button) =>{
    button.addEventListener('click', () => {tagOperator(button.textContent)
    }); 
});

function tagNumber(number){
    if ( currentOperationScreen.textContent === '0' || clearDisplay == true) {
        resetScreen();
    }  
    currentOperationScreen.textContent += number; 
}

function tagOperator() {

}


//
function clearScreen() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = 'xxx';
    holdOne = '';
    holdTwo = '';
    currentOperation = null;
}


function resetScreen() {
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
            add(a,b);
            // break;
        case '-' :
            subtract(a,b);
            // break;
        case '*' :
            multiply(a,b);
            // break;
        case '/' :
            if (b === 0)return null
            else return divide(a,b);
            // break;

        }

}