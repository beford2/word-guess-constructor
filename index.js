var inquirer = require("inquirer");
var Word = require("./Word.js");


function playGame(){
    var wordsToGuess = [
        "geek squad",
        "fortnite",
        "call of duty",
        "fifa ultimate team",
        "world cup"];

    var randWord = wordsToGuess[Math.floor(Math.random() * 4) + 1];

    var newWord = new Word(randWord);
    console.log(newWord);

    inquirer.prompt([
        {   
            type: "input",
            name: "char",
            message: "¿Guess a letter?"
        } 
    ]).then(function(user){
        var userInput = user.char;
        // need to call function in Word.js to check letter
    });

}


playGame();

