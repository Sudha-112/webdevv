//deleting a number from the given array
let arr = [1,2,3,4,5,6,2,3];
console.log(arr);
let num = prompt("enter the number you want to delete");
for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
    arr.splice(i,1);
}
}
console.log(arr);

//To find the number of digits in the number
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

//To find the sum of the number
let numbr = 287152;
let sum = 0;

let cpy = numbr;
while(cpy > 0){
    digit = cpy % 10;
    sum += digit;
    cpy  = Math.floor(cpy/10);
}
console.log(sum);

//To find the factorial of a number
let n = 5;
let factorial = 1;
for(let i =1; i <= n; i++){
    factorial *= i;
}
console.log(`the factorial of the ${n} is ${factorial}`);

//find the largest number in an array with only positive numbers
let arR = [2,5,10,4,2,70,1,9];

let largest = 0;

for(let i = 0; i < arR.length; i++){
    if(largest < arR[i]){
        largest = arR[i];    
    }
}
console.log(largest);   