// Display
const resultDisplay = document.querySelector('#result');
const inputDisplay = document.querySelector('#input');

// Buttons
const buttons = document.querySelectorAll("#button > button");
// AC
buttons[0].addEventListener('click', AC);
buttons[1].addEventListener('click', backspace);
buttons[2].addEventListener('click', digit);
buttons[3].addEventListener('click', digit);
buttons[4].addEventListener('click', digit);
buttons[5].addEventListener('click', digit);
buttons[6].addEventListener('click', digit);
buttons[7].addEventListener('click', digit);
buttons[8].addEventListener('click', digit);
buttons[9].addEventListener('click', digit);
buttons[10].addEventListener('click', digit);
buttons[11].addEventListener('click', digit);
buttons[12].addEventListener('click', digit);
buttons[13].addEventListener('click', digit);
buttons[14].addEventListener('click', digit);
buttons[15].addEventListener('click', digit);
buttons[16].addEventListener('click', digit);
buttons[17].addEventListener('click', digit);
buttons[18].addEventListener('click', result);

// Calculation
let inputStr = inputDisplay.innerHTML;
let calculatedValue = 0;

// Functionality
function AC() {
    resultDisplay.innerHTML = "0";
    inputDisplay.innerHTML = "0";
}
function backspace() {
    if (inputStr.length < 2) inputStr = "0";
    else inputStr = inputStr.slice(0, inputStr.length-1);
    inputDisplay.innerHTML = inputStr;
}
function result() {

}

// Mathematical Calculations
function sum() {}
function subtract() {}
function multiply() {}
function divide() {}
function mod() {}

function digit(e) {
    if (e.target.innerText === '0') {}
    else if (e.target.innerText === '1') {}
    else if (e.target.innerText === '2') {}
    else if (e.target.innerText === '3') {}
    else if (e.target.innerText === '4') {}
    else if (e.target.innerText === '5') {}
    else if (e.target.innerText === '6') {}
    else if (e.target.innerText === '7') {}
    else if (e.target.innerText === '8') {}
    else if (e.target.innerText === '9') {}
    else if (e.target.innerText === '.') {}
    if (inputStr.length <= 34) {
        inputStr += e.target.innerText;
        inputDisplay.innerHTML = inputStr;
    }
}