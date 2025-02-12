let name = 'muahaha';   
console.log(name); 

//Cannot be a reserved keyword
//Meaningful variable names
//Cannot start with number (1name)
//Cannot contain a space or hyphen (-)

let firstName = 'Timun'; //camel case
let first_name = 'Numit'; //underscore
const interestRate = 0.3;         //If you don't want to change the value of a variable, use const              //If you want to change the value of a variable, use let
console.log(interestRate);
let person = {
    nama: 'Timun',
    age: 26
}
console.log(person);

let selectedColor = ['red', 'blue'];
selectedColor[2] = 'green';
selectedColor[3] = '1';
console.log(selectedColor);

//Performing a task
function greet(name, lastName) { //parameter
    console.log('Hello World ' + name + ' ' + lastName); //concatenate string with variable
}
greet('Timun', 'Sale'); //Arguments
greet('Sale');

//Calculating a value
function square(number){
	return number * number;
}

let number = square(2); //We can store the return value in a variable
console.log(number); //we can do this
console.log(square(2)); //or this