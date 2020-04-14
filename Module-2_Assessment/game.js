let randTeam = "";
let characters = []
let blanks = 0;
let autofillin = [];
let wrong = [];
let wins = 0;
let losses = 0;
let guessLeft = 7;

const teams = [
    'tottenham',
    'liverpool',
    'chelsea',
    'manchesterunited',
    'manchestercity',
    'everton',
    'astonvilla',
    'newcastle'
]

function Game() {
    randTeam = teams[Math.floor(Math.random() * teams.length)];
    guessLeft = 7;
    characters = randTeam.split("");
    blanks = characters.length;
    for (var i = 0; i < blanks; i++) {
        autofillin.push("_ ");
    }

    document.getElementById("word").innerHTML = " " + autofillin.join(" ");
    console.log(characters)
}

function checkLetters(input) {
    var lettercheck = false;
    for (var i = 0; i < blanks; i++) {
        if (randTeam[i] == input) {
            lettercheck = true;
        }
    }

    if (lettercheck === true) {
        for (let i = 0; i < blanks; i++) {
            if (randTeam[i] == input) {
                autofillin[i] = input;
            }
        }
    }

    if (lettercheck === false) {
        wrong.push(input);
        guessLeft--;
    }

    if(guessLeft == 0) {
        randTeam = teams[Math.floor(Math.random() * teams.length)];
        autofillin = [];
        characters = [];
        wins--;
    }
    console.log(autofillin);
}


function reset() {
    autofillin = [];
    wrong = [];
    Game()
}

function finish() {
    if (characters.toString() == autofillin.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
        guessLeft=7;
        reset()
    } 
    else if (guessLeft === 0) {
        losses++;
        guessLeft=7;
        reset()
        document.getElementById("losses").innerHTML = " " + losses;
        
        
    }
    document.getElementById("word").innerHTML = " " + autofillin.join(" ");
    document.getElementById("guessleft").innerHTML = " " + guessLeft;
}

Game()

document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses)
    console.log(guesses);
    finish();
    
    document.getElementById("guess").innerHTML = "  " + wrong.join(" ").toUpperCase();
}