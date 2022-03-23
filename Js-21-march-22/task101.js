let num1 = window.prompt("please Enter the first number: ");
let operation = window.prompt("Please Enter the operation needed");
let num2 = window.prompt("Please Enter the second number:");
let result = 0;


function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    return result;
}

function sub(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    if (num2 == 0) {
        document.write("division by zero // ");
    }
    result = num1 / num2;
    return result;
}

if (operation == "+") {
    document.write(add(num1, num2));
} else if (operation == "-") {
    document.write(sub(num1, num2));
} else if (operation == "*") {
    document.write(multiply(num1, num2));
} else if (operation == "/") {
    document.write(divide(num1, num2));
} else {
    document.write("please enter a valid operator");
}