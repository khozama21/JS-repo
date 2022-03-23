function calcDoggieAge(puppAge) {
    puppAge = puppAge * 7;
    document.write(`your doggie is ${puppAge} in dogs years `);
}


let dogAge = window.prompt("enter your doggie's age ");
calcDoggieAge(dogAge);