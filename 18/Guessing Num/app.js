const user = prompt("Enter a max number");

const num = Math.floor(Math.random()*user)+1;

guessNum = prompt("guess the number");

while(true){
    if(guessNum == "quit"){
        console.log("Game quitted");
        break;
    }

    if(guessNum == num){
        console.log("Congrats! You are Right");
        break;
    }

    else if(guessNum<num){
        guessNum = prompt("OPPS! Your number is too small. Please enter a large number");
    }

    else{
        guessNum = prompt("OOPS! Your number is too large. Please enter a small number");
    }
}
