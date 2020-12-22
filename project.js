var readlineSync = require ("readline-sync");
var num1 = readlineSync.questionInt(" Provide first num ")
var num2 = readlineSync.questionInt(" Provide second num ")
var enteredOperator = readlineSync.question("what operartion do you want to perform : add,sub,mul,div?")


function add(num1,num2){
return  (num1 + num2); 
}
function sub(num1,num2){
return  (num1 - num2);
}
function mul(num1,num2){
return (num1 * num2);
}
function div(num1,num2){
    return(num1 / num2);
}

if(enteredOperator =="add"){
     console.log(add(num1,num2));
}

else if(enteredOperator =="sub"){
    console.log(sub(num1,num2));
}
else if (enteredOperator =="mul"){
    console.log(mul(num1,num2));
}
else if (enteredOperator =="div"){
    console.log(div(num1,num2));
}