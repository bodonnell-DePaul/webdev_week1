// Get references to DOM elements
var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
var currentInput = "";
var operator = null;
var previousInput = "";
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.dataset.value;
        if (value === "C") {
            clearDisplay();
        }
        else if (value === "=") {
            calculateResult();
        }
        else if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        }
        else {
            appendToDisplay(value);
        }
    });
});
function clearDisplay() {
    currentInput = "";
    operator = null;
    previousInput = "";
    display.value = "";
}
function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}
function setOperator(op) {
    if (currentInput === "")
        return;
    if (operator !== null)
        calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}
function calculateResult() {
    if (operator === null || currentInput === "")
        return;
    var prev = parseFloat(previousInput);
    var current = parseFloat(currentInput);
    var result;
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    display.value = result.toString();
    currentInput = result.toString();
    operator = null;
    previousInput = "";
}
