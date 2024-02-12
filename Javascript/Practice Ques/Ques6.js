// let firstValue = "32";
// let secondValue = "3782";
// if(firstValue[firstValue.length-1] === "2" && secondValue[secondValue.length-1] === "2"){
//     console.log("The first value and second value have the same last digit 2.");
// }
// else{
//     console.log("The first value and the second value don't have the same last digit 2.");
// }
let num1 = 32;
let num2 = 3782;
if((num1 % 10) == (num2 % 10)){
    console.log(`Numbers have the same last digit ${num1 % 10}.`);
}
else{
    console.log("Numbers don't have the same last digit.")
}