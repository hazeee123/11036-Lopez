let result;
let operator = parseInt(prompt("Please select an operation between 1-4\n 1-Addition\n 2-Subtraction\n 3-Multiplication\n 4-Division"));

if(operator <= 4){
let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));

    switch(operator){
        case 1: 
            result = number1 + number2;
            alert("The sum is " + result);
            break;
        case 2:
            result = number1 - number2;
            alert("The difference is " + result);
            break;
        case 3: 
            result = number1 * number2;
            alert("The product is " + result);
            break;
        case 4:
            result = number1 / number2;
            alert("The quotient is " + result);
            break;
    }
}else
    alert("Input is invalid.");







