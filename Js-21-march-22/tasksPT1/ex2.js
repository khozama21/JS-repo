// Ex2
document.write("This is a JavaScript that finds the sign of product of three numbers. and Display an alert box with the specified sign.");
document.write("<br><br>");
let n1 = window.prompt("Please enter the first number: ");
let n2 = window.prompt("Please enter the second number: ");
let n3 = window.prompt("Please enter the third number: ");
let sign = '';
const product = n1 * n2 * n3;
if (product < 0) {
    sign = '-';

} else if (product > 0) {
    sign = '+';
} else {
    sign = 'No sign '
}
document.write(`REULT: the sign is ( ${sign} )`);
alert(`REULT: the sign is ( ${sign} )`);

//end of Ex2