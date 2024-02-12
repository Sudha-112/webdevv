//check whether the string is empty or not
let str = prompt("Please enter the string");
if (str.length == 0) {
    console.log("string is empty");
}
else {
    console.log("string is not empty");
}

//check the lowercase letter in the string
let str1 = "ApnaCollEgE";
let idx = 3;
if (str1[idx] == str1[idx].toLowerCase()) {
    console.log("character is lowercase");
}
else {
    console.log("character is not a lowercase");
}

//remove the trailing spaces in the string
let str2 = prompt("Please enter the string");
console.log(`string with spaces ${str2}`);
console.log(`string without the spaces ${str2.trim()}`);

//check whether the element is present in the array or not
let arr = ['hello',23,67,'g','y',67,89];
let item = 'gs';
if(arr.indexOf(item) == -1){
    console.log("element is not present in the array");
}
else{
    console.log("element is present in the array");
}

