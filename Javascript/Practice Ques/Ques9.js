//generate a random number whwn rolling a dice 
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Your dice number is ",dice);

//creating car's and person's details

const car = {
           name:"Maruti Suzuki",
           model:"Maruit Suzuki Dzire",
           color:"white"
};
console.log(car.name);
console.log(car);

const person = {
         name:"Sudha",
         age:21,
         city:"Faridabad"
};
person.city = "New York";
person.country = "India";
console.log(person);