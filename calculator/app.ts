// Get references to DOM elements
const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn");

let currentInput: string = "";
let operator: string | null = null;
let previousInput: string = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = (button as HTMLButtonElement).dataset.value;

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculateResult();
        } else if (["+", "-", "*", "/"].includes(value!)) {
            setOperator(value!);
        } else {
            appendToDisplay(value!);
        }
    });
});

function clearDisplay() {
    currentInput = "";
    operator = null;
    previousInput = "";
    display.value = "";
}

function appendToDisplay(value: string) {
    currentInput += value;
    display.value = currentInput;
}

function setOperator(op: string) {
    if (currentInput === "") return;
    if (operator !== null) calculateResult();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (operator === null || currentInput === "") return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result: number;

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