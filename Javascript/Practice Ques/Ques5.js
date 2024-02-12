let firstNumber = 300;
let secondNumber = 44;
let thirdNumber = 55;
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(`The largest number is ${firstNumber}.`)
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(`The largest number is ${secondNumber}.`)
}
else {
    console.log(`The largest number is ${thirdNumber}.`);
}