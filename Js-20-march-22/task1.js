let grade = window.prompt("Please Enter your grade : ");
let result='';
if(grade<0){
    console.log("Please enter a valid value.")
}
else if (grade>=90 && grade<=100){
    result='A';
}
else if (grade>=80 && grade<=89){
     result='B';
}
else if (grade>=70 && grade<=79){
    result='c';
}
else if (grade>=60 && grade<=69){
    result='D';
}
else if (grade>=50 && grade<=59){
    result='E';
}
else {
    result='Failed';
}