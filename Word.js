
// grabbing the stuff from Letter.js file
var Letter = require("./Letter");

// creating a Word constructor
function Word(currentWord){
    this.lettersDisplay = [];
    this.lettersObject = [];
    this.placeholders = [];
    this.currentWord = currentWord;
}

// function that creates the word
Word.prototype.makeWord = function(){

    // this.lettersDisplay = this.currentWord.split("");

    // creates word and placeholder arrays
    for(i = 0; i < this.currentWord.length; i++){
        var currentLetter = this.currentWord.charAt(i);
        var newLetter = new Letter(currentLetter);
        if(this.currentWord.charAt(i) === " "){
            this.lettersDisplay.push(" ");
            this.placeholders[i] = " ";
        }else{
            this.lettersObject.push(newLetter);
            this.lettersDisplay.push(currentLetter);
            this.placeholders[i] = "_";
        }
    }
    // console.log(this.lettersObject);
    // console.log(this.lettersDisplay);
    // console.log(this.currentWord);
    // console.log(this.placeholders.join(" "));
    return [this.lettersObject, this.lettersDisplay, this.placeholders];
}

Word.prototype.checkWord = function(){
    // need code in here to update the word when user guesses the correct letter
    
}

var word1 = new Word("brandon ford two");
word1.makeWord();

module.exports = Word;