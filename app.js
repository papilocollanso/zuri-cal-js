
console.log('Basic arithmetic calculator without a frontend \n using\ Javascrript');

console.log('Enter the operation you want to perform');

const userValue = window.prompt('what operation ? ');

const number1 = parseFloat(window.prompt("Enter first number: "));
const number2 = parseFloat(window.prompt("Enter second number: "));

function doCalculation()
{
const possible = true;
let result;
while(possible)

{
if (userValue == '+')
{
    // do something
    result = number1 + number2;
    console.log(`The result is: ${result}`);
    break;
}
else if(userValue == '-')
{
    // do something 
     result = number1 - number2;
     console.log(`The result is: ${result}`);
      
    //exit out of the loop 
       break;
}

else if(userValue  == '*')

{
  //do something 
   result = number1 * number2; 
   console.log(`The result is: ${result}`);
     
  //exit out of the loop
     break; 
}
else if (userValue == '/')
{
    //do something
     result = number1 / number2;
     console.log(`The result is: ${result}`);
       
    //exit out of the loop
       break;
}

else
{
    // do another thing
    console.log('operation entered not valid');

    //exit out of the loop
       break;
}
}

console.log('Refresh the browser to play again');


}

doCalculation();


