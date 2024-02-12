//Guessing the movie(favorite movie)
const favMovie = "Avatar";
let guess = prompt("Guess the movie name");
while((guess != favMovie && guess != "quit")){
   guess = prompt(" Wrong Guess.Please try again");
}
if(guess == favMovie){
    alert("Congrats! You guess it right.")
} else{
    console.log("you quit");
}
