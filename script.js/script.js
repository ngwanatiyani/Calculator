let currentInput = "";
let operator = null;
let previousValue = null;

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== "") {
        previousValue = parseFloat(currentInput);
        currentInput = "";
    }
    operator = op;
    updateDisplay();
}

function calculateResult() {
    if (previousValue !== null && currentInput !== "" && operator) {
        const currentValue = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = previousValue + currentValue;
                break;
            case '-':
                result = previousValue - currentValue;
                break;
            case '*':
                result = previousValue * currentValue;
                break;
            case '/':
                result = currentValue === 0 ? "Error" : previousValue / currentValue;
                break;
            default:
                result = "Error";
        }

        previousValue = typeof result === "number" ? result : null;
        currentInput = "";
        operator = null;
        updateDisplay(result);
    }
}

function calculatePercent() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function calculateTrig(func) {
    if (currentInput !== "") {
        const value = parseFloat(currentInput) * (Math.PI / 180); // Convert to radians
        let result;

        switch (func) {
            case 'sin':
                result = Math.sin(value).toFixed(5);
                break;
            case 'cos':
                result = Math.cos(value).toFixed(5);
                break;
            case 'tan':
                result = Math.tan(value).toFixed(5);
                break;
            case 'asin':
                result = (Math.asin(value) * (180 / Math.PI)).toFixed(5); // Convert result to degrees
                break;
            case 'acos':
                result = (Math.acos(value) * (180 / Math.PI)).toFixed(5); // Convert result to degrees
                break;
            case 'atan':
                result = (Math.atan(value) * (180 / Math.PI)).toFixed(5); // Convert result to degrees
                break;
            default:
                result = "Error";
        }

        currentInput = result;
        updateDisplay();
    }
}



function clearDisplay() {
    currentInput = "";
    previousValue = null;
    operator = null;
    updateDisplay();
}

function updateDisplay(value = currentInput) {
    document.getElementById("display").value = value || "0";
}
