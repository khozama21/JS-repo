document.write("This is a JavaScript that finds the largest of five numbers. Display an alert box to show the result.");
document.write("<br><br>");

let n1 = window.prompt("Please enter the first number: ");
let n2 = window.prompt("Please enter the second number: ");
let n3 = window.prompt("Please enter the third number: ");
let order = [];

if (n1 > n2 && n2 > n3) {
    order = [n1, n2, n3];
} else if (n2 > n1 && n1 > n3) {
    order = [n2, n1, n3];

} else if (n3 > n1 && n2 > n1) {
    order = [n3, n2, n1];

} else if (n3 > n2 && n1 > n2) {
    order = [n3, n1, n2];

} else if (n3 > n2 && n2 > n1) {
    order = [n3, n2, n1];

}
document.write(`REULT: the sign is ( ${order} )`);
alert(`REULT: the order is ( ${order} )`);