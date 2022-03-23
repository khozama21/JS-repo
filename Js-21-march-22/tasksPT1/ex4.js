document.write("This is a JavaScript that sorts three numbers. and Displays an alert box to show the result. ");
document.write("<br><br>");

let n1 = window.prompt("Please enter the first number: "); //a
let n2 = window.prompt("Please enter the second number: "); //b
let n3 = window.prompt("Please enter the third number: "); //c
let n4 = window.prompt("Please enter the fourth number: "); //d
let n5 = window.prompt("Please enter the fifth number: "); //e


let largest = 0;

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    largest = n1;
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    largest = n2;
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    largest = n3;
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    largest = n4

} else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
    largets = n5;
} else {
    alert("error");
}


document.write(`REULT: the largest is ( ${largest} )`);
alert(`REULT: the largest is ( ${largest} )`);