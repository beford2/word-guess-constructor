

// creating a Letter constructor
function Letter(guess){
    this.guess = guess;
    this.check = false;
}

// function that check if letter has been guessed
Letter.prototype.showLetter = function(){
    if(this.check){
        return this.guess;
    }else{
        return "_";
    }
    
}

// function to check if the letter was a correct guess
Letter.prototype.checkLetter = function(character){
    if(this.guess === character){
        this.check = true;
    }else{
        return false;
    }
}



// exporting file info
module.exports = Letter;