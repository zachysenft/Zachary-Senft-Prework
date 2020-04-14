
//VARIABLES
var words = ["selenagomez", "justinbieber", "billieeilish", "arianagrande", "taylorswift", "cardib", "rihanna"]

//Empty variables to store values later
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;



// ALL FUNCTIONS
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//__________________________________________________________
//GAME START FUNCTION
//__________________________________________________________
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("word").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var sel = document.getElementById("selenagomez");
var jb = document.getElementById("justinbieber");
var billie = document.getElementById("billieeilish");
var ariana = document.getElementById("arianagrande");
var taylor = document.getElementById("taylorswift");
var cardi = document.getElementById("cardib");
var ri = document.getElementById("rihanna");


function aud() {
    //Arthur Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        ariana.pause();
        taylor.pause();
        cardi.pause();
        ri.pause();
        billie.pause();
        jb.pause();
        sel.play();
        document.getElementById("image").src = "./assets/images/selena.png";
    }
    //Rugrats Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        ariana.pause();
        taylor.pause();
        cardi.pause();
        rihanna.pause();
        billie.pause();
        sel.pause();
        jb.play();
        document.getElementById("image").src = "./assets/images/justin.jpg";
    }
    //Simpsons Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        ariana.pause();
        taylor.pause();
        cardi.pause();
        ri.pause();
        jb.pause();
        sel.pause();
        billie.play();
        document.getElementById("image").src = "./assets/images/badguy.jpg.";
    }
    //Scooby-doo Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        taylor.pause();
        cardi.pause();
        ri.pause();
        billie.pause();
        jb.pause();
        sel.pause();
        ariana.play();
        document.getElementById("image").src = "./assets/images/ariana.jpg";
    }
    //Spongebob Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        cardi.pause();
        ri.pause();
        billie.pause();
        jb.pause();
        sel.pause();
        ariana.pause();
        taylor.play();
        document.getElementById("image").src = "./assets/images/taylor.jpg";
    }
    //Danny Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        taylor.pause();
        ri.pause();
        billie.pause();
        jb.pause();
        sel.pause();
        ariana.pause();
        cardi.play();
        document.getElementById("image").src = "./assets/images/cardib.jpg";
    }
    //Teen Titans Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        taylor.pause();
        cardi.pause();
        billie.pause();
        jb.pause();
        sel.pause();
        ariana.pause();
        ri.play();
        document.getElementById("image").src = "./assets/images/rihanna.jpg";
    }
};

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//__________________________________________________________
//CHECK LETTERS/COMPARE FUNCTION
//__________________________________________________________

//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

//__________________________________________________________
//FINAL COMPLETE FUNCTION
//__________________________________________________________

//check to see if player won...
function complete() {
    console.log("wins" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/game-over.jpg"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

 // Wait for key press
 document.onkeypress = function(event) {
    // Make sure key pressed is an alpha character
    if (isAlpha(event.key) && !pauseGame) {
        checkLetters(event.key.toUpperCase())
    }
}

//call start game function
Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses)
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ").toUpperCase();

}