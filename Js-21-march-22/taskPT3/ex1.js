 function tellFortune(numOfChild, PtName, glocation, job) {
     document.write(`You'll be a ${job} in ${glocation}, Married to ${PtName}, and have ${numOfChild} Kids `);

 }
 let numberOfChild = 0;
 let jobTitle = "Web Developer";
 let PartnerName = "Jefferry";
 let geolocation = "kuala lumpur";
 tellFortune(numberOfChild, PartnerName, geolocation, jobTitle);