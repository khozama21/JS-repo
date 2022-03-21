let day = window.prompt("Please enter the number of the day you want:");
let result = "";
switch (day) {
    case '1':
        result = "saturday";
        break;
    case '2':
        result = "Sunday";
        break;
    case '3':
        result = "Monday";
        break;
    case '4':
        result = "Tuesday";

        break;
    case '5':
        result = "wednesday";

        break;
    case '6':
        result = "Thursday";

        break;
    case '7':
        result = "Friday";
        break;
    default:
        console.log("enter a valid value");

}
document.write(result);