//Users enters a max number and then tries to guess a random generated number betweeen 1 to max. 
const max = prompt("Please enter the max number");
console.log(` Random number bewteen 1 - ${max}`);

const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
   if(guess == random){
        console.log("You are right! Congrats!! random number was", random);
        break;
    }
    else if(guess > random){
        guess = prompt("Hint: Your guess was too large.Please try again.");
    
    }
    else if(guess < random){
        guess = prompt("Hint: Your guess was too small.Please try again.");
    }
    
}









